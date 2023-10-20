import { Splitter } from './splitter/splitter';


function App() {

  return (
    <div className="app">
      <div>Application</div>
      <Splitter>
        <div id="panel-left">Left</div>
        <div id="resize">xxx</div>
        <div id="panel-right">Right</div>
      </Splitter>
    </div>
  )
}

export default App
