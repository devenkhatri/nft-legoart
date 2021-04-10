import Board from 'react-legra'

const Neutral = () => {
    return (
        <Board width="500" height="500" style={{width: '100%', height: 'auto'}}>
          <Board.Rectangle start={[0, 0]} width={21} height={21} options={{ filled: true, color: 'gray' }} />
          <Board.Circle center={[10, 10]} radius={9} options={{ filled: true, color: '#ffde34' }} />
          <Board.Rectangle start={[5, 6]} width={3} height={3} options={{ filled: true, color: 'black' }} />
          <Board.Rectangle start={[13, 6]} width={3} height={3} options={{ filled: true, color: 'black' }} />          
          <Board.Line from={[5, 14]} to={[15, 14]} options={{ color: 'black' }}  />
        </Board>
    );
}

export default Neutral;