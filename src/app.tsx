import { Splitter } from './splitter/splitter';

function App() {
  return (
    <div className="app">
      <div style={{ height: '300px' }}>
        <Splitter direction="vertical">
          <div style={{ background: 'lightblue', height: '100%' }}>top</div>
          <div style={{ background: 'black', color: 'white' }}>resizer</div>
          <div style={{ background: 'green', height: '100%' }}>bottom</div>
        </Splitter>
      </div>

      <div style={{ width: '700px'}}>
        <Splitter direction="horizontal">
          <div style={{ background: 'lightblue', width: '100%', height: '100px' }}>top</div>
          <div style={{ background: 'black', color: 'white', height: '100px' }}>resizer</div>
          <div style={{ background: 'green', width: '100%', height: '100px' }}>bottom</div>
        </Splitter>
      </div>
    </div>
  )
}

export default App
