import 'bootstrap/dist/css/bootstrap.min.css';
import Happy from './components/1-happy'
import { CardDeck, Card, Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <CardDeck>
        <Card className="text-center">
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Happy />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Happy />
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Happy />
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Happy />
          </Card.Body>
        </Card>
      </CardDeck>

    </div>
  );
}

export default App;
