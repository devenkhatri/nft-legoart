import Board from 'react-legra'

const Happy = () => {
    return (
        <Board width="500" height="500" style={{width: '100%', height: 'auto'}}>
          <Board.Rectangle start={[0, 0]} width={21} height={21} options={{ filled: true, color: '#cccccc' }} />
          <Board.Circle center={[10, 10]} radius={9} options={{ filled: true, color: '#ffde34' }} />
          <Board.Rectangle start={[5, 6]} width={3} height={3} options={{ filled: true, color: '#555555' }} />
          <Board.Rectangle start={[13, 6]} width={3} height={3} options={{ filled: true, color: '#555555' }} />          
          <Board.QuadraticCurve
            from={[5, 14]}
            to={[15, 14]}
            controlPoint={[10, 20]}
            options={{ filled: false, color: '#555555' }}
          />
        </Board>
    );
}

export default Happy;
