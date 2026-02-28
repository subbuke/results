import './App.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='hero'>
        <div className='badge'>🎓 Academic Portal</div>
        <h1 className='main-title'>Student Results</h1>
        <p className='subtitle'>Access your academic results and college records securely</p>

        <div className='resultBtn'>
          <Stack direction="row" spacing={4}>
            <Button
              variant="contained"
              size="large"
              startIcon={<SchoolIcon />}
              endIcon={<SendIcon />}
              className='college-btn'
              onClick={() => navigate("/college")}
            >
              College Portal
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<MenuBookIcon />}
              endIcon={<SendIcon />}
              className='student-btn'
              onClick={() => navigate("/students")}
            >
              Student Portal
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Home