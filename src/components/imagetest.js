import Board, { Image } from 'react-legra'

const ImageTest = () => {
    return (
        <Board width="500" height="500" style={{width: '100%', height: 'auto'}}>
          <Image src="source_images/smiley-small.png" width='500' height='500' bs={24} />
        </Board>
    );
}

export default ImageTest;
