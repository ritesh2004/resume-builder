import React from "react";
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const Work = () => {
    return (
        <>
            <div className="work">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Work Experiences</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder="Type here..." />
                        <div className="text-center pt-3">
                        <Button variant="text" className="text-center"> <AddIcon /> </Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}



export default Work;