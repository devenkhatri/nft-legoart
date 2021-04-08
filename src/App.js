import './App.css';
import Board from 'react-legra'

function App() {

  const vertices = [
    [10, 8],
    [8, 11],
    [12, 11]
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Board width="600" height="600">
          <Board.Circle center={[10, 10]} radius={8} options={{ filled: true, color: 'yellow' }} />
          <Board.Rectangle start={[6, 6]} width={2} height={2} options={{ filled: true, color: 'green' }} />
          <Board.Rectangle start={[13, 6]} width={2} height={2} options={{ filled: true, color: 'green' }} />
          <Board.Polygon vertices={vertices} options={{ filled: true, color: 'red' }} />
          <Board.QuadraticCurve
            from={[5, 13]}
            to={[15, 13]}
            controlPoint={[10, 22]}
          />
        </Board>
      </header>
    </div>
  );
}

export default App;
