
use hippov6_wasm::{encode, decode};

const ADDRESSES: [&str; 8] = [
    "1::1",
    "::1",
    "1::",
    "2000::2000",
    "2000::2000:1000",
    "2001:0:6dcd:8c74:76cc:63bf:ac32:6a1",
    "2001::ac32:6a1",
    "1111::1:1:1:1"
];

#[test]
fn conversion_test() {
    for address in ADDRESSES.iter() {
        assert_eq!(address, &decode(&encode(address)));
    }
}

