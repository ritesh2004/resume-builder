import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
// import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Button from 'react-bootstrap/Button';


const Work = (props) => {

    const [val, setVal] = useState([]);

    const addSection = () =>{
        const add = [...val,[]]
        setVal(add)
    }

    const handleChange = (changedVal,i) =>{
        const data = [...val]
        data[i] = changedVal.target.value
        setVal(data)
    }

    const deleteSection = (i) =>{
        const data = [...val]
        data.splice(i,1)
        setVal(data)
    }

    // console.log(val)
    props.setWk(val)

    return (
        <>
            <div className="work" id="we">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Work Experiences</Form.Label>
                        {val.map((data,i)=>{
                            return (
                                <div style={{padding:'5px',display:'flex',flexDirection:'row',columnGap:'5px'}}>
                                <Form.Control as="textarea" value={data} onChange={(e)=>{handleChange(e,i)}} rows={1} placeholder="Type here..." />
                                <Button className="cancel-btn" onClick={()=>deleteSection(i)} variant="danger"> <CloseIcon/> </Button>
                                </div>
                            )
                        })}
                        <div className="text-center pt-3">
                        <Button variant="primary" id="add-btn" className="text-center" onClick={addSection}> <AddIcon /> </Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}



export default Work;