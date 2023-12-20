import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';

const WordCount = () => {
    
    const [text, setText] = useState("")
    const [wordCountTotal, setWordCountTotal] = useState(0)
    const [charTotal, setCharTotal] = useState(0)
    const [charExcludingSpaceTotal, setCharExcludingSpaceTotal] = useState(0)
    const [charExcludingSpaceText, setCharExcludingSpaceText] = useState("")
    
    const handleChange = (e) => {
        const text = e.target.value;
        setText(text)
        setWordCountTotal(text.trim().split(' ').length)
        setCharTotal(text.length)
        setCharExcludingSpaceText(text.replace(/ /g, ""))
        setCharExcludingSpaceTotal(text.replace(/ /g, "").length - 1)
    }

    return (
        <Form>
            <Row>
                <Col md={12}>
                    <h3 className='text-center mt-3'>Word Count</h3>
                </Col>
                <Col md={12}>
                    <Row className='text-center'>
                        <Col md={4}>
                            <h4 className='text-primary mb-0 fs-1'>{text ? wordCountTotal : "0"}</h4>
                            <div className="">Words</div>
                            <CopyToClipboard text={wordCountTotal} onCopy={() => toast.success(' Text copied.')}>
                            <Button size="sm" variant="secondary" className=''>Copy Text</Button>
                            </CopyToClipboard>
                        </Col>
                        <Col md={4}>
                            <h4 className='text-primary mb-0 fs-1'>{text ? charTotal : "0"}</h4>
                            <div className="">Characters</div>
                            <CopyToClipboard text={wordCountTotal} onCopy={() => toast.success(' Text copied.')}>
                            <Button size="sm" variant="secondary" className=''>Copy Text</Button>
                            </CopyToClipboard>
                        </Col>
                        <Col md={4}>
                            <h4 className='text-primary mb-0 fs-1'>{text ? charExcludingSpaceTotal : "0"}</h4>
                            <div className="">Characters excluding spaces</div>
                            <CopyToClipboard text={charExcludingSpaceText} onCopy={() => toast.success(' Text copied.')}>
                            <Button size="sm" variant="secondary" className=''>Copy Text</Button>
                            </CopyToClipboard>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter your text</Form.Label>
                <Form.Control as="textarea" rows={10} onChange={(e)=>{
                    handleChange(e)
                }}/>
            </Form.Group>
        </Form>
    )
}

export default WordCount