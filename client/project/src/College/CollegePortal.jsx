import "./College.css"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import { useNavigate } from "react-router-dom"

export default function CollegePortal(){

  const navigate = useNavigate();

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
          <Button variant="contained" size="large" className="btn" onClick={() => navigate("/college/create")}>
            Create student marksheet
          </Button>
          <Button variant="contained" size="large" className="btn" onClick={() => navigate("/college/edit")}>
            Edit student marksheet
          </Button>
          <Button variant="contained" size="large" className="btn" onClick={() => navigate("/college/delete")}>
            Delete student marksheet
          </Button>
        </Stack>
        </>
    )
}