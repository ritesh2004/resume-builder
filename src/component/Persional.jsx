import { TextareaAutosize } from "@mui/material";
import React from "react";
import Form from 'react-bootstrap/Form';


const Persional = () => {
    return (
        <>
        <div className="persional">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control type="email" placeholder="example@abc.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control type="text" placeholder="Phone no" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" placeholder="Type here..."/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Facebook Profile</Form.Label>
                    <Form.Control type="text" placeholder="Profile link..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Twitter Profile</Form.Label>
                    <Form.Control type="text" placeholder="Profile link..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>LinkedIn Profile</Form.Label>
                    <Form.Control type="text" placeholder="Profile link..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Hobby/Hobbies</Form.Label>
                    <Form.Control type="text" placeholder="Type here..." />
                </Form.Group>
            </Form>
            </div>
        </>
    )
}




export default Persional;