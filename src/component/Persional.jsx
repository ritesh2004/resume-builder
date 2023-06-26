import { TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';


const Persional = (props) => {

    const [persional,setPersional] = useState({
        name:"",
        image:"",
        email:"",
        contact:"",
        address:"",
        fprofile:"",
        gprofile:"",
        tprofile:"",
        lprofile:"",
        hobby:""
    })

    const getDetails = (val) =>{
        const {value, name} = val.target;

        setPersional((preValue)=>{
            return{
                ...preValue,
                [name] : value
            }
        })
    }

    props.setPr(persional);

    return (
        <>
        <div className="persional">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={getDetails} value={persional.name} placeholder="Full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Profile Images</Form.Label>
                    <Form.Control type="file" name="image" onChange={getDetails} value={persional.image} placeholder="Profile Images" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control type="email" name="email" onChange={getDetails} value={persional.email}  placeholder="example@abc.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contact No</Form.Label>
                    <Form.Control type="text" name="contact" onChange={getDetails} value={persional.contact} placeholder="Phone no" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" name="address" onChange={getDetails} value={persional.address} placeholder="Type here..."/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>GitHub Profile</Form.Label>
                    <Form.Control type="text" name="gprofile" onChange={getDetails} value={persional.gprofile} placeholder="Profile link..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Facebook Profile</Form.Label>
                    <Form.Control type="text" name="fprofile" onChange={getDetails} value={persional.fprofile} placeholder="Profile link..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Twitter Profile</Form.Label>
                    <Form.Control type="text" name="tprofile" onChange={getDetails} value={persional.tprofile} placeholder="Profile link..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>LinkedIn Profile</Form.Label>
                    <Form.Control type="text" name="lprofile" onChange={getDetails} value={persional.lprofile} placeholder="Profile link..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Hobby/Hobbies</Form.Label>
                    <Form.Control type="text" name="hobby" onChange={getDetails} value={persional.hobby} placeholder="Type here..." />
                </Form.Group>
            </Form>
            </div>
        </>
    )
}




export default Persional;