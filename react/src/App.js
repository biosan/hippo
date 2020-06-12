// >>> React stuff...
import React, { useState } from 'react';

// >>> Components
import Header from './components/Header';
import Content from './components/Content';
import Converter from './components/Converter';
import Footer from './components/Footer';
import GitHubCorner from './components/GitHubCorner';

// >>> Style
//import style from 'styled-components';
//import tw from 'twin.macro';
//import GlobalStyle from './style/globalStyles';

function App() {
  const [wasm, setWasm] = useState(null);

  const loadWasm = async () => {
    try {
      const wasm = await import('hippov6-wasm');
      setWasm(wasm);
      console.log("WASM module loaded");
    } catch (e) {
      console.error("Error loading WASM module. " + e);
    }
  };

  loadWasm();

  return (
    <main>
      {/* <GlobalStyle/> */}
      <GitHubCorner repoUrl="https://github.com/biosan/hippo"/>
      <Header/>
      <hr/>
      <Content/>
      <hr/>
      <Converter wasm={wasm}/>
      <Footer/>
    </main>
  )
};

export default App;

