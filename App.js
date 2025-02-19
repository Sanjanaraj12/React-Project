import React from 'react';
import Counter from '../src/Component/Counter.jsx';
import RichText from '../src/Component/Rich_text.jsx';
import Form from "../src/Component/Form.jsx";
import './App.css';



export default function App() {
  return (
    <div className="app-container">
      <div className="top-section">
        <Counter />
        <RichText />
      </div>
      <div className="bottom-section">
        <Form />
      </div>
    </div>
  );
}
