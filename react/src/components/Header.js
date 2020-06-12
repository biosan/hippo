import React from 'react';
import 'twin.macro';

import {ReactComponent as Logo} from '../icons/hippo.svg';

function Header() {
  return (
    <header tw="font-mono">
      <h1>
        <Logo tw="inline w-16" aria-label="hippopotamus"/> Hippo
      </h1>

      <blockquote tw="text-lg font-mono">
        <strong>H</strong>yperbolic <strong>IP</strong>v6 to <strong>P</strong>hrases <strong>O</strong>racle
      </blockquote>

    </header>
  )
}

export default Header;

