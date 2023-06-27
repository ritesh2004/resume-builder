import React, { useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './resume.css';
import Img from './Images/Img.jpg';
import { Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SchoolIcon from '@mui/icons-material/School';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FlagIcon from '@mui/icons-material/Flag';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import { PrintContextConsumer,useReactToPrint } from "react-to-print";


const Resume = (props) => {

    console.log(props.det)

    let {academic,acheivements,certificates,hard,languages,objective,profile,projects,soft,work,image} = props.det;

    const inputRef = useRef();
    // const [image,setImage] = useState(null);

    const handleClick = () =>{
        inputRef.current.click()
    }
    
    // const handleImage = (e) =>{
    //     setImage(e.target.files[0])
    //     // console.log(e.target.files[0])
    // }

    const componentRef = useRef();

    const printResume = useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:"resume",
        onAfterPrint:()=>alert("Resume Saved")
    })


    console.log(image)

    return (
        <>
            <div className="resume" ref={componentRef}>
                <Container width="900px" className="res-con">
                    <Row>
                        <Col id="col1" style={{ backgroundColor: '#03a7a7',minHeight:'1050px'}} xs={4}>
                        <div onClick={handleClick}>
                            {image && <img src={URL.createObjectURL(image)} alt="img" width="150px" height='150px' />}
                            </div>
                            <br />
                            <div className="profile">
                                <Typography className="mt-2" variant="h5">CAREER OBJECTIVE</Typography>
                                <Typography>{objective}</Typography>
                                <Typography className="mt-2" variant="h5">CONTACT</Typography>
                                <Container>
                                    <Row>
                                        <Col xs={1}>
                                            <LocationOnIcon/>
                                        </Col>
                                        <Col>
                                            <Typography>{profile['address']}</Typography>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <CallIcon/>
                                        </Col>
                                        <Col>
                                            <Typography>{profile['contact']}</Typography>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <EmailIcon/>
                                        </Col>
                                        <Col>
                                            <Typography>{profile['email']}</Typography>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <GitHubIcon/>
                                        </Col>
                                        <Col>
                                            <Typography>{profile['gprofile']}</Typography>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <FacebookIcon/>
                                        </Col>
                                        <Col>
                                            <Typography>{profile['fprofile']}</Typography>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <LinkedInIcon/>
                                        </Col>
                                        <Col>
                                            <Typography>{profile['lprofile']}</Typography>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <TwitterIcon/>
                                        </Col>
                                        <Col>
                                            <Typography>{profile['tprofile']}</Typography>
                                        </Col>
                                    </Row>
                                </Container>
                                {/* <br /> */}
                                <Typography className="mt-2" variant="h5">HARD SKILLS</Typography>
                                <ul>
                                    {hard && hard.map((val,i)=>{
                                        return(
                                            <li><Typography>{val}</Typography></li>
                                        )
                                    })}
                                </ul>
                                {/* <br /> */}
                                <Typography className="mt-2" variant="h5">SOFT SKILLS</Typography>
                                <ul>
                                {soft && soft.map((val,i)=>{
                                        return(
                                            <li><Typography>{val}</Typography></li>
                                        )
                                    })}
                                </ul>
                                {/* <br /> */}
                                <Typography className="mt-2" variant="h5">LANGUAGES</Typography>
                                <ul>
                                { languages && languages.map((val,i)=>{
                                        return(
                                            <li><Typography>{val}</Typography></li>
                                        )
                                    })}
                                </ul>
                                {/* <br /> */}
                                <Typography className="mt-2" variant="h5">HOBBY</Typography>
                                <Typography>{profile['hobby']}</Typography>
                            </div>
                        </Col>
                        <Col xs={8}>
                            <Container>
                                <Row>
                                    <Col>
                                    <hr />
                                        <Typography className="text-center" variant="h2">
                                            {profile['name']}
                                        </Typography>
                                    <hr />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col>
                                        <Typography variant="h5"><AssuredWorkloadIcon/> EXPERIENCES</Typography>
                                        <hr />
                                        <ul>
                                        {work && work.map((val,i)=>{
                                        return(
                                            <li><Typography>{val}</Typography></li>
                                        )
                                    })}
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Typography variant="h5"> <SchoolIcon/> ACADEMIC INFO</Typography>
                                        <hr />
                                        <ul>
                                        {academic && academic.map((val,i)=>{
                                        return(
                                            <li><Typography>{val}</Typography></li>
                                        )
                                    })}
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Typography variant="h5"> <EmojiObjectsIcon/> PROJECTS</Typography>
                                        <hr />
                                        <ul>
                                        {projects && projects.map((val,i)=>{
                                        return(
                                            <li><Typography>{val}</Typography></li>
                                        )
                                    })}
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Typography variant="h5"> <FlagIcon/> ACHEIVEMENTS</Typography>
                                        <hr />
                                        <ul>
                                        {acheivements && acheivements.map((val,i)=>{
                                        return(
                                            <li><Typography>{val}</Typography></li>
                                        )
                                    })}
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Typography variant="h5"> <HistoryEduIcon/> CERTIFICATES</Typography>
                                        <hr />
                                        <ul>
                                        {certificates && certificates.map((val,i)=>{
                                        return(
                                            <li><Typography>{val}</Typography></li>
                                        )
                                    })}
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="text-center mt-5 mb-5">
                <Button variant="contained" onClick={printResume}>Print Resume</Button>
            </div>
        </>
    )
}





export default Resume;