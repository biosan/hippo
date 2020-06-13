import React from 'react';
import 'twin.macro';

function Footer({children}) {
  return (
    <footer>
        <strong>Built with a <span role="img" aria-label="beer">🍺</span>+<span role="img" aria-label="heart">❤️</span> by <a href="https://alessandro.biondi.me"><code>@biosan</code></a>.</strong>
        <p tw="mt-4"><em>Emoji tech stack:</em> <span role="img" aria-label="crab">🦀</span>+<span role="img" aria-label="atom">⚛️</span></p>
    </footer>
  )
}

export default Footer;
