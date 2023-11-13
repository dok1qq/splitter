import { Splitter } from './splitter/splitter';

function App() {
  return (
    <div className="app">
      <div>Application</div>
      <div style={{ height: '300px' }}>
        <Splitter
          direction="vertical"
          renderResizer={() => <div style={{ background: 'black', color: 'white' }}>resizer</div>}
          renderTop={() => <div style={{ background: 'lightblue', height: '100%' }}>top</div>}
          renderBottom={() => <div style={{ background: 'green', height: '100%' }}>bottom</div>}
        />
      </div>

      <div style={{ height: '50px' }}></div>

      <div style={{ height: '200px', width: '700px'}}>
        <Splitter
          direction="horizontal"
          renderResizer={() => <div style={{ background: 'black', color: 'white', height: '100px' }}>resizer</div>}
          renderLeft={() => <div style={{ background: 'lightblue', width: '100%', height: '100px' }}>top</div>}
          renderRight={() => <div style={{ background: 'green', width: '100%', height: '100px' }}>bottom</div>}
        />
      </div>
    </div>
  )
}

export default App
