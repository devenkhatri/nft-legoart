import 'bootstrap/dist/css/bootstrap.min.css';
import Happy from './components/1-happy'
import HappyFilled from './components/2-happy-filled'
import Neutral from './components/3-neutral'
import { Container, Row, Col, Alert, Card, Button } from 'react-bootstrap'

function App() {
  const generatedImages = [
    {
      title: 'Happy Face',
      description: 'This is the description of happy face',
      openseaurl: '#',
      renderer: <Happy />
    },
    {
      title: 'Happy Face Filled',
      description: 'This is the description of filled happy face',
      openseaurl: '#',
      renderer: <HappyFilled />
    },
    {
      title: 'Neutral Face',
      description: 'This is the description of neutral face',
      openseaurl: '#',
      renderer: <Neutral />
    },
    {
      title: 'Happy Face',
      description: 'This is the description of happy face',
      openseaurl: '#',
      renderer: <Happy />
    },
    {
      title: 'Happy Face',
      description: 'This is the description of happy face',
      openseaurl: '#',
      renderer: <Happy />
    },
    {
      title: 'Neutral Face',
      description: 'This is the description of neutral face',
      openseaurl: '#',
      renderer: <Neutral />
    },
  ];
  console.log(generatedImages)
  return (
    <div className="App">
      <Alert variant={'success'}>
          <h2 className="text-center">NFTs listed on OpenSea Marketplace</h2>
      </Alert>
      <Container fluid>
        <Row>
          {generatedImages && generatedImages.map((imageDetail, index) => {
            return (
              <Col sm={3} className="mt-4">
                <Card key={index} className="text-center">
                  <Card.Header as="h5">{imageDetail.title}</Card.Header>
                  <Card.Body>
                    {imageDetail.renderer}
                    <Button variant="primary">Buy Item</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">{imageDetail.description}</Card.Footer>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
