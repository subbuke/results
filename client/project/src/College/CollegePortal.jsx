import "./College.css"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'

export default function CollegePortal(){
    return(
        <>
        <div className="clg-title">
         <h1 className="clg-title-text">COLLEGE PORTAL</h1>
        </div>

        <Stack 
          direction="row" 
          spacing={6} 
          justifyContent="center" 
          alignItems="center"
          sx={{ mt: 10 }}
        >
          <Button variant="contained" size="large" className="btn">
            Create student marksheet
          </Button>
          <Button variant="contained" size="large" className="btn">
            Edit student marksheet
          </Button>
          <Button variant="contained" size="large" className="btn">
            Delete student marksheet
          </Button>
        </Stack>
        </>
    )
}