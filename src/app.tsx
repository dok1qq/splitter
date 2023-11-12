import { Splitter } from './splitter/splitter';

function App() {
  return (
    <div className="app">
      <div style={{ height: '400px' }}>Application</div>
      <Splitter
        direction="vertical"
        renderResizer={() => <div>resizer</div>}
        renderTop={() => <div>top</div>}
        renderBottom={() => <div>bottom</div>}
      />
      {/*<Splitter direction="horizontal" renderResizer={() => <div>resizer</div>} />*/}
    </div>
  )
}

export default App
