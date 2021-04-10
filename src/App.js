import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from './components/sample'
import Happy from './components/1-happy'
import Grinning from './components/2-grinning'
import Neutral from './components/3-neutral'
import JoyTears from './components/4-joytears'
import { Container, Row, Col, Alert, Card, Button } from 'react-bootstrap'

function App() {
  const generatedImages = [
    {
      title: 'Happy Face',
      description: 'A yellow face with simple, open eyes and a thin, closed smile. Conveys a wide range of positive, happy, and friendly sentiments. Its tone can also be patronizing, passive-aggressive, or ironic, as if saying This is fine when it’s really not.',
      openseaurl: '#',
      renderer: <Happy />
    },
    {
      title: 'Grinning Face',
      description: 'A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.',
      openseaurl: '#',
      renderer: <Grinning />
    },
    {
      title: 'Neutral Face',
      description: 'A yellow face with simple, open eyes and a flat, closed mouth. Intended to depict a neutral sentiment but often used to convey mild irritation and concern or a deadpan sense of humor.',
      openseaurl: '#',
      renderer: <Neutral />
    },
    {
      title: 'Tears of Joy - 1',
      description: 'A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing. Named the Oxford Dictionaries 2015 Word of the Year, and the most used emoji on all platforms from 2011-2021.',
      openseaurl: '#',
      renderer: <JoyTears />
    },
    {
      title: 'Winking Face with Tongue - 1',
      description: 'A yellow face sticking out its tongue and making a zany wink, usually shown with its right eye closed and left wide open. Often conveys a sense of fun, excitement, wackiness, buffoonery, or joking.',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Smiling Face with Heart-Eyes - 1',
      description: 'A yellow face with an open smile, sometimes showing teeth, and red, cartoon-styled hearts for eyes. Often conveys enthusiastic feelings of love, infatuation, and adoration, e.g., I love/am in love with this person or thing.',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Face with Medical Mask - 6',
      description: 'A yellow face wearing a white surgical mask, as used by health workers in hospitals as well as the general public during a pandemic. May be worn to avoid sickness or spreading airborne diseases.',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Smiling Face with Sunglasses - 7',
      description: 'A yellow face with a broad, closed smile wearing black sunglasses, as if a pair of classic Wayfarers. Often used to convey the slang sense of cool. May also express a confident, carefree attitude or that something is excellent.',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Loudly Crying Face - 8',
      description: 'A yellow face with an open mouth wailing and streams of heavy tears flowing from closed eyes. May convey inconsolable grief but also other intense feelings, such as uncontrollable laughter, pride or overwhelming joy.',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Flushed Face - 9',
      description: 'A yellow face with raised eyebrows, a small, closed mouth, wide, white eyes staring straight ahead, and blushing cheeks. Intended to depict such feelings as embarrassment, but meaning very widely varies. Other senses include flattery, surprise, disbelief, admiration, affection, and excitement.',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Pensive Face - 11',
      description: 'A pensive, remorseful face. Saddened by life. Quietly considering where things all went wrong. Depicted as a yellow face with sad, closed eyes, furrowed eyebrows, and a slight, flat mouth.',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Money-Mouth Face - 2',
      description: 'A yellow face with raised eyebrows, dollar signs for eyes, and an open smile sticking out a tongue styled after a green, dollar banknote. Some platforms depict the dollar-sign eyes in green circles.',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Unamused Face - 10',
      description: 'A yellow face with slightly raised eyebrows, a frown, and eyes looking to the side. May convey a variety of negative emotions, including irritation, displeasure, grumpiness, and skepticism, as if giving the side-eye.',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Sleeping Face - 2',
      description: 'A yellow face with eyes closed and mouth letting out three, cartoon-styled Zzz’s overhead to indicate its sound asleep. The Zzz appear blue or purple across most platforms. May also represent boredom (slang, snooze).',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Crying Face - 2',
      description: 'A yellow face with raised eyebrows and a slight frown, shedding a single, blue tear from one eye down its cheek. May convey a moderate degree of sadness or pain, usually less intensely than 😭 Loudly Crying Face.',
      openseaurl: '#',
      renderer: <Sample />
    },
    {
      title: 'Astonished Face - 2',
      description: 'A yellow face with open eyes, raised eyebrows, and an open mouth, as if gasping in shock or surprise. Often depicted showing its upper teeth. May convey a wide range of emotions, including awe, amazement, admiration, disbelief, excitement, or concern.',
      openseaurl: '#',
      renderer: <Sample />
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
