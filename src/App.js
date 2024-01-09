import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';

function App() {
  const [value, setValue] = useState("console.log('hello world!');");
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const onChange = (val, viewUpdate) => {
    setValue(val);
  };

  const handleLanguageChange = (selectedValue) => {
    setSelectedLanguage(selectedValue);
  };

  const handleButtonClick = () => {
    console.log('Current content:', value);
  };

  const languageOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'cpp', label: 'C++' },
    { value: 'java', label: 'Java' },
  ];

  const selectedLanguageMode = () => {
    switch (selectedLanguage) {
      case 'javascript':
        return javascript({ jsx: true });
      case 'python':
        return python();
      case 'cpp':
        return cpp();
      case 'java':
        return java();
      default:
        return javascript({ jsx: true });
    }
  };


  return (
    <div>
      <label>Select Language:</label>
      <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <CodeMirror
        value={value}
        height="200px"
        extensions={[selectedLanguageMode()]}
        theme="dark"
        onChange={onChange}
      />

      <button onClick={handleButtonClick}>전송</button>
    </div>
  );
}

export default App;