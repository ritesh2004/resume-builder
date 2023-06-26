import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Accordion from 'react-bootstrap/Accordion';
import Persional from './component/Persional';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Work from './component/Work';
import Academic from './component/Academics';
import Certificates from './component/Certificates';
import Acheivements from './component/Acheivements';
import Hardskills from './component/Hardskills';
import Softskills from './component/Softskills';
import Resume from './Resume';
import Languages from './component/Languages';
import Projects from './component/Projects';
import { Typography } from '@mui/material';



function FormCom(props) {
  const [openPdet, setOpenPdet] = useState(false);
  const [openCar, setOpenCar] = useState(false);
  const [openLan, setOpenLan] = useState(false);
  const [openWex, setOpenWex] = useState(false);
  const [openPro, setOpenPro] = useState(false);
  const [openAc, setOpenAc] = useState(false);
  const [openCer, setOpenCer] = useState(false);
  const [openAch, setOpenAch] = useState(false);
  const [openSk, setOpenSk] = useState(false);
  const [openHd, setOpenHd] = useState(false);


  const [profile, setProfile] = useState("");
  const [languages, setLanguages] = useState("");
  const [work, setWork] = useState("");
  const [hard, setHard] = useState("");
  const [soft, setSoft] = useState("");
  const [projects, setProjects] = useState("");
  const [academic, setAcademic] = useState("");
  const [certificates, setCertificates] = useState("");
  const [acheivements, setAcheivement] = useState("");

  let details = {
    profile:profile,
    languages:languages,
    work:work,
    hard:hard,
    soft:soft,
    projects:projects,
    academic:academic,
    certificates:certificates,
    acheivements:acheivements
  }



  return (
    <>
    <div className="FormCom">
    <div className="form">
    <div id="con">
      <h1 className='text-center'>Resume Builder</h1>
    </div>
    <br />
    <div className="form-con">

    {/* Persional Details */}

    <span>Persional Details</span>
      <Button
      variant='text'
        onClick={() => setOpenPdet(!openPdet)}
        aria-controls="persional-details"
        aria-expanded={openPdet}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openPdet}>
        <div id="persional-details">
          
        </div>
      </Collapse>

    {/* Career Objective */}

    <span>Career Objective</span>
      <Button
      variant='text'
        onClick={() => setOpenCar(!openCar)}
        aria-controls="career-objective"
        aria-expanded={openCar}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openCar}>
        <div className='objective' id="career-objective">
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{}}>Career Objective</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Type here...'/>
      </Form.Group>
    </Form>
        </div>
      </Collapse>

      {/* Languages  */}

      <span>Languages</span>
      <Button
      variant='text'
        onClick={() => setOpenLan(!openLan)}
        aria-controls="languages"
        aria-expanded={openLan}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openLan}>
        <div id="languages">
          <Languages lan={languages} setLan={setLanguages} />
        </div>
      </Collapse>

      {/* Hard Skills */}

    <span>Hard Skills</span>
      <Button
      variant='text'
        onClick={() => setOpenHd(!openHd)}
        aria-controls="hard-skills"
        aria-expanded={openHd}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openHd}>
        <div id="hard-skills">
          <Hardskills hd={hard} setHd={setHard} />
        </div>
      </Collapse>

      {/* Soft Skills */}

    <span>Soft Skills</span>
      <Button
      variant='text'
        onClick={() => setOpenSk(!openSk)}
        aria-controls="soft-skills"
        aria-expanded={openSk}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openSk}>
        <div id="soft-skills">
          <Softskills st={soft} setSt={setSoft} />
        </div>
      </Collapse>

      {/* Work Experience */}

    <span>Work Experience</span>
      <Button
      variant='text'
        onClick={() => setOpenWex(!openWex)}
        aria-controls="work-experience"
        aria-expanded={openWex}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openWex}>
        <div id="work-experience">
          <Work wk={work} setWk={setWork} />
        </div>
      </Collapse>

      {/* Projects */}

    <span>Projects</span>
      <Button
      variant='text'
        onClick={() => setOpenPro(!openPro)}
        aria-controls="projects"
        aria-expanded={openPro}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openPro}>
        <div id="projects">
          <Projects pro={projects} setPro={setProjects} />
        </div>
      </Collapse>

      {/* Academic Info */}
      
    <span>Academic Info</span>
      <Button
      variant='text'
        onClick={() => setOpenAc(!openAc)}
        aria-controls="academic-info"
        aria-expanded={openAc}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openAc}>
        <div id="academic-info">
          <Academic ac={academic} setAc={setAcademic} />
        </div>
      </Collapse>
      
      {/* Certificates */}

    <span>Certificates</span>
      <Button
      variant='text'
        onClick={() => setOpenCer(!openCer)}
        aria-controls="certificates"
        aria-expanded={openCer}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openCer}>
        <div id="certificates">
          <Certificates cer={certificates} setCer={setCertificates} />
        </div>
      </Collapse>

      {/* Acheivments */}

    <span>Acheivements</span>
      <Button
      variant='text'
        onClick={() => setOpenAch(!openAch)}
        aria-controls="acheivements"
        aria-expanded={openAch}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openAch}>
        <div id="acheivements">
          <Acheivements ach={acheivements} setAch={setAcheivement} />
        </div>
      </Collapse>
      </div>
      </div>
      </div>
      <Typography variant='h3' className='text-center mb-5'>Preview</Typography>
      <div className="resume-con">
          <Resume det={details} />
      </div>
      <div className="footer">

      </div>
    </>
  );
}

export default FormCom;