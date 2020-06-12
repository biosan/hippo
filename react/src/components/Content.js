import React from 'react';
import 'twin.macro';

function Content() {
  return (
    <section>

      <p>This web app converts a difficult to remember IPv6 address into a <em>(little)</em> easier to remember list of (max 8) words and numbers.</p>

      <p>The IPv6 address is split into it's segments (16bit numbers) and every segments is then converted into a word from the <em><a href="https://github.com/heartsucker/diceware">"heartsucker wordlist"</a></em> plus a number.</p>

      <blockquote><em>NOTE:</em> If the number it's zero, it's omitted.</blockquote>

      <p>Using IPv6 segments directly allow us to use the same rules that applies to IPv6 to shorten the address replacing zero-segments with <code>::</code></p>

      <details>
        <summary tw="font-bold text-lg">Technical details</summary>
        <p>This is a very simple SPA build with <a href="https://reactjs.org/">React</a> using the <code><a href="https://github.com/facebook/create-react-app">create-react-app</a></code> template.</p>
        <p>Styling is provided by <code><a href="https://github.com/mblode/marx">marx</a></code> a classless CSS toolkit and <a href="https://tailwindcss.com">TailwindCSS</a> for some small personalization.</p>
        <p>The conversion code is written in <a href="https://www.rust-lang.org/">Rust</a> and compiled to <a href="https://webassembly.org/">WebAssembly</a> using the awesome <code><a href="https://github.com/rustwasm/wasm-pack">wasm-pack</a></code> tool</p>
        <p>Source code and more details are available in the project repo on GitHub. <code><a href="https://github.com/biosan/hippo">github.com/biosan/hippo</a></code></p>
      </details>
    </section>

  );
}

export default Content;
