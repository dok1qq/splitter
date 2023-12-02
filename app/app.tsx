import './app.css';

import '../src/splitter.css';
import { Splitter } from '../src';

import { Left, Top, Bottom } from './panels';

export function App() {
  return (
    <div className="app">
      <Splitter direction="horizontal">
        <Left />
        <div className="separator-h" />
        <Splitter direction="vertical">
          <Top />
          <div className="separator-v" />
          <Bottom />
        </Splitter>
      </Splitter>
    </div>
  );
}
