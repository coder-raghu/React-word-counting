import 'bootstrap/dist/css/bootstrap.min.css';
import WordCount from './components/WordCount';
import Container from 'react-bootstrap/Container';
import { Toaster } from 'react-hot-toast';
import { Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import RemoveSpaceFromText from './components/RemoveSpaceFromText';
function App() {

  const [activeButton, setActiveButton] = useState("word_count")

  return (
    <Container>
      <Row>
        <Col className='mt-5 text-center'>
            <Button variant="outline-secondary me-3" onClick={()=>setActiveButton("word_count")}>Word Count</Button>
            <Button variant="outline-secondary me-3" onClick={()=>setActiveButton("remove_space_from_text")}>Remove space from text</Button>
        </Col>
      </Row>
      <Toaster />      
      {activeButton === "word_count" && <WordCount />}
      {activeButton === "remove_space_from_text" && <RemoveSpaceFromText />}
      
    </Container>
  );
}

export default App;
