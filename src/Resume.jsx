import React from "react";
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


const Resume = (props) => {

    // console.log(props.det)

    return (
        <>
            <div className="resume">
                <Container fluid='lg'>
                    <Row>
                        <Col id="col1" style={{ backgroundColor: '#03a7a7' }} xs={3}>
                            <img src={Img} alt="img" width="200px" />
                            <br />
                            <div className="profile">
                                <Typography variant="h5">CAREER OBJECTIVE</Typography>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum quos ad voluptatum laborum, voluptate eos itaque esse culpa quasi?</p>
                                <br />
                                <Typography variant="h5">CONTACT</Typography>
                                <Container>
                                    <Row>
                                        <Col xs={1}>
                                            <LocationOnIcon/>
                                        </Col>
                                        <Col>
                                            Debipur, Purba Bardhaman, West Bengal-713146
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <CallIcon/>
                                        </Col>
                                        <Col>
                                            +91-6295478328
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <EmailIcon/>
                                        </Col>
                                        <Col>
                                            pramanikritesh907@gmail.com
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <GitHubIcon/>
                                        </Col>
                                        <Col>
                                            riteshpramanik-29
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <FacebookIcon/>
                                        </Col>
                                        <Col>
                                            riteshpramanik-29
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <LinkedInIcon/>
                                        </Col>
                                        <Col>
                                            riteshpramanik-29
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={1}>
                                            <TwitterIcon/>
                                        </Col>
                                        <Col>
                                            riteshpramanik-29
                                        </Col>
                                    </Row>
                                </Container>
                                <br />
                                <Typography variant="h5">HARD SKILLS</Typography>
                                <ul>
                                    <li>Python Programming Language</li>
                                    <li>Java Programming</li>
                                    <li>Problem Solving</li>
                                    <li>React Js[Web Development]</li>
                                    <li>Django Framework</li>
                                </ul>
                                <br />
                                <Typography variant="h5">SOFT SKILLS</Typography>
                                <ul>
                                    <li>Good Communication Skill</li>
                                    <li>Leadership Skill</li>
                                </ul>
                                <br />
                                <Typography variant="h5">LANGUAGES</Typography>
                                <ul>
                                    <li>English</li>
                                    <li>Hindi</li>
                                    <li>Bengali</li>
                                </ul>
                                <br />
                                <Typography variant="h5">HOBBY/HOBBIES</Typography>
                                <ul>
                                    <li>Reading</li>
                                    <li>Listening music</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={8} style={{border:"solid 1px black"}} >
                            <Container>
                                <Row>
                                    <Col>
                                    <hr />
                                        <Typography className="text-center" variant="h2">
                                            Ritesh Pramanik
                                        </Typography>
                                        <Typography className="text-center" variant="h5">ECE Undergraduate</Typography>
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
                                            <li><Typography>[2022-23] Internship at Oasis Infobyte</Typography></li>
                                            <li><Typography>[2023] Summer Internship at Code Clause</Typography></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Typography variant="h5"> <SchoolIcon/> ACADEMIC INFO</Typography>
                                        <hr />
                                        <ul>
                                            <li><Typography>[2020] Secondary at Debipur Station High School with 89.42%</Typography></li>
                                            <li><Typography>[2020-22] Higher Secondary at Debipur Station High School with 92.4%</Typography></li>
                                            <li><Typography>[2022-26] BTech in ECE at Academy of Technology</Typography></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Typography variant="h5"> <EmojiObjectsIcon/> PROJECTS</Typography>
                                        <hr />
                                        <ul>
                                            <li><Typography>[2022] Password Generator in Python</Typography></li>
                                            <li><Typography>[2022] Tic-Tac-Toe Game in Python</Typography></li>
                                            <li><Typography>[2023] E-commerce Website using React and Django</Typography></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Typography variant="h5"> <FlagIcon/> ACHEIVEMENTS</Typography>
                                        <hr />
                                        <ul>
                                            <li><Typography>[2023] Top 10th Rank in Synapse 2.0</Typography></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Typography variant="h5"> <HistoryEduIcon/> CERTIFICATES</Typography>
                                        <hr />
                                        <ul>
                                            <li><Typography>[2022] Python for Beginners from Udemy</Typography></li>
                                            <li><Typography>[2022] HTML and CSS Learning from Cisco</Typography></li>
                                            <li><Typography>[2023] React and Bootstrap learning from Udemy</Typography></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}





export default Resume;