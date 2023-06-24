import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Persional from './component/Persional';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Work from './component/Work';
import Academic from './component/Academics';
import Certificates from './component/Certificates';

function FormCom() {
  const [openPdet, setOpenPdet] = useState(false);
  const [openWex, setOpenWex] = useState(false);
  const [openAc, setOpenAc] = useState(false);
  const [openCer, setOpenCer] = useState(false);

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
          <Persional />
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
          <Work />
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
          <Academic />
        </div>
      </Collapse>
      
      {/* Certificates */}

    <span>Certificates</span>
      <Button
      variant='text'
        onClick={() => setOpenCer(!openCer)}
        aria-controls="academic-info"
        aria-expanded={openCer}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openCer}>
        <div id="academic-info">
          <Certificates />
        </div>
      </Collapse>

      {/* Acheivments */}

    <span>Acheivments</span>
      <Button
      variant='text'
        onClick={() => setOpenCer(!openCer)}
        aria-controls="academic-info"
        aria-expanded={openCer}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <hr />
      <Collapse in={openCer}>
        <div id="academic-info">
          <Academic />
        </div>
      </Collapse>
      </div>
      </div>
      </div>
    </>
  );
}

export default FormCom;