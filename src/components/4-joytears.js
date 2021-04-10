import Board from 'react-legra'

const JoyTears = () => {
  return (
    <Board width="500" height="500" style={{ width: '100%', height: 'auto' }}>
      <Board.Rectangle start={[0, 0]} width={21} height={21} options={{ filled: true, color: 'gray' }} />
      <Board.Circle center={[10, 10]} radius={9} options={{ filled: true, color: '#ffde34' }} />
      <Board.Line from={[3, 8]} to={[5, 6]} options={{ color: 'black' }} />
      <Board.Line from={[5, 8]} to={[8, 8]} options={{ color: 'black' }} />
      
      <Board.Line from={[12, 8]} to={[15, 8]} options={{ color: 'black' }} />
      <Board.Line from={[15, 6]} to={[17, 8]} options={{ color: 'black' }} />
      <Board.QuadraticCurve
        from={[5, 14]}
        to={[15, 14]}
        controlPoint={[10, 20]}
        options={{ filled: true, color: 'black' }}
      />
      <Board.QuadraticCurve
        from={[7, 14]}
        to={[13, 14]}
        controlPoint={[10, 17]}
        options={{ filled: true, color: 'white' }}
      />
      {/* left tear */}
      <Board.Line from={[5, 9]} to={[3, 11]} options={{ color: '#3b88c3' }} />
      <Board.Line from={[2, 12]} to={[2, 13]} options={{ color: '#3b88c3' }} />
      <Board.Line from={[3, 14]} to={[4, 14]} options={{ color: '#3b88c3' }} />
      <Board.Line from={[5, 13]} to={[5, 13]} options={{ color: '#3b88c3' }} />
      <Board.Line from={[5, 10]} to={[5, 12]} options={{ color: '#56C5F7' }} />
      <Board.Line from={[4, 11]} to={[4, 13]} options={{ color: '#56C5F7' }} />
      <Board.Line from={[3, 12]} to={[3, 13]} options={{ color: '#56C5F7' }} />

      {/* left tear */}
      <Board.Line from={[15, 9]} to={[17, 11]} options={{ color: '#3b88c3' }} />
      <Board.Line from={[18, 12]} to={[18, 13]} options={{ color: '#3b88c3' }} />
      <Board.Line from={[16, 14]} to={[17, 14]} options={{ color: '#3b88c3' }} />
      <Board.Line from={[15, 13]} to={[15, 13]} options={{ color: '#3b88c3' }} />
      <Board.Line from={[15, 10]} to={[15, 12]} options={{ color: '#56C5F7' }} />
      <Board.Line from={[16, 11]} to={[16, 13]} options={{ color: '#56C5F7' }} />
      <Board.Line from={[17, 12]} to={[17, 13]} options={{ color: '#56C5F7' }} />
    </Board>
  );
}

export default JoyTears;
