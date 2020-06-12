import React, { useState } from 'react';
import tw from 'twin.macro';

const MainSection = tw.section`
  container flex flex-col items-center
`;

const ConvertSection = tw.section`
  container flex md:flex-row sm:flex-col flex-col items-center
`;

const ConvertInput = tw.input``

const ConvertButton = tw.button`
  m-2 w-32 flex-shrink-0
`;

const ConvertOutput = tw.input`
  bg-gray-100! text-gray-800!
`;


function Converter({ wasm }) {
  // >>> IP -> Words
  // Hooks
  const [ipInput, setIpInput] = useState("");
  const [wordOutput, setWordOutput] = useState("");
  // Handlers
  const handleIpInput = event => {
    setIpInput(event.target.value);
  };
  const handleIpClick = () => {
    // TODO: Use a "try" and handle errors
    try {
      const words = wasm.encode(ipInput);
      setWordOutput(words);
    } catch {
      // TODO: Use something more cool then an alert
      alert("Invalid IP");
    }
  };

  // >>> IP -> Words
  // Hooks
  const [wordInput, setWordInput] = useState("");
  const [ipOutput, setIpOutput] = useState("");
  // Handlers
  const handleWordInput = event => {
    setWordInput(event.target.value);
  };
  const handleWordClick = event => {
    try {
      const words = wasm.decode(wordInput);
      setIpOutput(words);
    } catch {
      // TODO: Use something more cool then an alert
      alert("Invalid words");
    }
  }

  return (
    <MainSection>

      <h2>IPv6 <span role="img" aria-label="arrow right">➡️</span> Words</h2>

      <ConvertSection>
        <ConvertInput
          type="text"
          name="ipv6-input"
          id="ipv6-input"
          onChange={handleIpInput}/>
        <ConvertButton
          id="ipv6-button"
          onClick={handleIpClick}>
            Get words
        </ConvertButton>
        <ConvertOutput readOnly value={wordOutput}/>
      </ConvertSection>

      <h2>Words <span role="img" aria-label="arrow right">➡️</span> IPv6</h2>

      <ConvertSection>
        <ConvertInput
          type="text"
          name="words-input"
          id="words-input"
          onChange={handleWordInput}/>
        <ConvertButton
          id="words-button"
          onClick={handleWordClick}>
            Get IPv6
        </ConvertButton>
        <ConvertOutput readOnly value={ipOutput}/>
      </ConvertSection>

    </MainSection>
  )
}

export default Converter;

