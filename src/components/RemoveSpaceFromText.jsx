import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';

const RemoveSpaceFromText = () => {
    
    const [charExcludingSpaceText, setCharExcludingSpaceText] = useState("")

    const handleChange = (e) => {
        const text = e.target.value;
        setCharExcludingSpaceText(text.replace(/ /g, ""))        
    }

    return (
        <Form>
            <Row>
                <Col md={12}>
                    <h3 className='text-center mt-3'>Remove space from word</h3>
                </Col>
                <Col md={12}>
                    <CopyToClipboard text={charExcludingSpaceText} onCopy={() => toast.success(' Text copied.')}>
                        <Button size="sm" variant="secondary" className='mb-1'>Copy Text</Button>
                    </CopyToClipboard>
                </Col>
            </Row>                
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={10} onChange={(e)=>{
                    handleChange(e)
                }}/>
            </Form.Group>
            <CopyToClipboard text={charExcludingSpaceText} onCopy={() => toast.success(' Text copied.')}>
                <p>{charExcludingSpaceText}</p>
            </CopyToClipboard>
        </Form>
    )
}

export default RemoveSpaceFromText