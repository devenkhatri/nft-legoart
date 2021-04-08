import 'bootstrap/dist/css/bootstrap.min.css';
// import Happy from './components/1-happy'
import Neutral from './components/2-neutral'
import { CardDeck, Card, Button } from 'react-bootstrap'

function App() {
  const generatedImages = [
    {}, {}, {}, {}
  ];
  return (
    <div className="App">
      <CardDeck>
        {generatedImages && generatedImages.map((imageDetail, index) => {
          return (
            <Card key={index} className="text-center">
              <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                <Neutral />
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          )
        })}
      </CardDeck>

    </div>
  );
}

export default App;
