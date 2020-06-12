mod list;
mod utils;

use wasm_bindgen::prelude::*;

use list::WORDLIST;
use std::net::Ipv6Addr;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// Some constants...
// Wordlist number of elements and relative "bits"
const BITS: usize = 13;
const MAX: usize = 8192;
// IPv6 separators
const IPV6_SOFT_SEPARATOR: &str = ":";
const IPV6_HARD_SEPARATOR: &str = "::";
// Words format separators
const WORDS_SOFT_SEPARATOR: &str = "-";
const WORDS_HARD_SEPARATOR: &str = "::";

// Encode IPv6 to words
#[wasm_bindgen]
pub fn encode(ip: &str) -> String {
    let ip: Ipv6Addr = ip.parse().unwrap();
    let string_ip = ip.to_string();

    let is_compressed: bool = string_ip.contains(IPV6_HARD_SEPARATOR);

    let ip_parts: Vec<&str>;

    if is_compressed {
        ip_parts = string_ip.split(IPV6_HARD_SEPARATOR).collect();
    } else {
        ip_parts = vec![&string_ip, ""];
    }

    let left_segments: Vec<&str> = ip_parts
        .first()
        .unwrap_or(&"")
        .split(IPV6_SOFT_SEPARATOR)
        .collect();
    let right_segments: Vec<&str> = ip_parts
        .last()
        .unwrap_or(&"")
        .split(IPV6_SOFT_SEPARATOR)
        .collect();

    let left_words = segments_to_words(left_segments);
    let right_words = segments_to_words(right_segments);

    let words: String;

    if is_compressed {
        words = vec![
            left_words.join(WORDS_SOFT_SEPARATOR),
            right_words.join(WORDS_SOFT_SEPARATOR),
        ].join(WORDS_HARD_SEPARATOR);
    } else {
        words = left_words.join(WORDS_SOFT_SEPARATOR);
    }

    return words;
}

// Decode words into a IPv6
#[wasm_bindgen]
pub fn decode(words: &str) -> String {
    let is_compressed: bool = words.contains(WORDS_HARD_SEPARATOR);

    let words_parts: Vec<&str>;

    if is_compressed {
        words_parts = words.split(WORDS_HARD_SEPARATOR).collect();
    } else {
        words_parts = vec![&words, ""];
    }

    let left_words: Vec<&str> = words_parts
        .first()
        .unwrap_or(&"")
        .split(WORDS_SOFT_SEPARATOR)
        .collect();

    let right_words: Vec<&str> = words_parts
        .last()
        .unwrap_or(&"")
        .split(WORDS_SOFT_SEPARATOR)
        .collect();

    let left_segments = words_to_segments(left_words);

    let right_segments = words_to_segments(right_words);

    let ipv6_string: String;

    if is_compressed {
        ipv6_string = vec![
            left_segments.join(IPV6_SOFT_SEPARATOR),
            right_segments.join(IPV6_SOFT_SEPARATOR),
        ].join(IPV6_HARD_SEPARATOR);
    } else {
        ipv6_string = left_segments.join(IPV6_SOFT_SEPARATOR);
    }

    eprintln!("Input: {:?} - Output {:?}", words, ipv6_string);

    let output: Ipv6Addr = ipv6_string.parse().unwrap();
    return output.to_string();
}

// Convert IPv6 segments (u16 in hex string format) into words and numbers
fn segments_to_words(segments: Vec<&str>) -> Vec<String> {

    let words: Vec<String> = segments
        .iter()
        .skip_while(|segment| segment.is_empty())
        .map(|segment| u16::from_str_radix(segment, 16).unwrap())
        .map(|hexet| hexet as usize)
        .map(|hexet| (hexet % MAX, hexet >> BITS))
        .map(|hexet| format!("{}{}", WORDLIST.get(hexet.0).unwrap(), hexet.1 ))
        .map(|word| word.replace("0", ""))
        .collect();
    return words;
}

// Convert words and numbers into IPv6 segments (u16 in hex string format)
fn words_to_segments(words: Vec<&str>) -> Vec<String> {

    fn add_zero(input: &str) -> String {
        let mut postfix = "";
        if input.ends_with(char::is_alphabetic) {
            postfix = "0";
        }
        return format!("{}{}", input, postfix)
    }

    let segments = words
        .iter()
        .skip_while(|&word| word.is_empty())
        .map(|&word| add_zero(word))
        .map(|word| (word[..word.len() - 1].to_string(), word[word.len() - 1..].to_string()))
        .map(|parts| {
            (
                WORDLIST.binary_search(&parts.0.as_str()).unwrap(),
                usize::from_str_radix(parts.1.as_str(), 10).unwrap(),
            )
        })
        .map(|numbs| numbs.0 + (numbs.1 << BITS))
        .map(|hexet| format!("{:04x}", hexet))
        .collect();
    return segments;
}
