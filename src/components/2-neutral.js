import Board from 'react-legra'

const Neutral = () => {
    const vertices = [
        [10, 8],
        [8, 11],
        [12, 11]
      ]
    return (
        <Board width="500" height="500" style={{width: '100%', height: 'auto'}}>
          <Board.Circle center={[10, 10]} radius={9} options={{ filled: true, color: 'yellow' }} />
          <Board.Rectangle start={[6, 6]} width={2} height={2} options={{ filled: true, color: 'green' }} />
          <Board.Rectangle start={[13, 6]} width={2} height={2} options={{ filled: true, color: 'green' }} />
          <Board.Polygon vertices={vertices} options={{ filled: true, color: 'red' }} />
          <Board.Line from={[5, 14]} to={[15, 14]} />
          {/* <Board.QuadraticCurve
            from={[5, 13]}
            to={[15, 13]}
            controlPoint={[10, 19]}
          /> */}
        </Board>
    );
}

export default Neutral;