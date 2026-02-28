import "./Students.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import SendIcon from '@mui/icons-material/Send'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function StudentsPortal() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    studentName: '',
    rollNumber: '',
    email: '',
    semester: ''
  })

  const semesters = ['1st semister', '2nd semister', '3rd semister', '4th semister', "5th semister"]

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(form)
  }

  return (
    <>
      <div className="clg-title">
        <h1 className="clg-title-text">College Portal</h1>
      </div>

      <div className='cp-container'>
        <div className='cp-card'>
          <button className='back-btn' onClick={() => navigate('/')}>
            <ArrowBackIcon /> Back
          </button>

          <p className='cp-subtitle'>Enter student details to view results</p>

          <div className='cp-form'>
            <TextField
              label="Student Name"
              name="studentName"
              value={form.studentName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Roll Number"
              name="rollNumber"
              value={form.rollNumber}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              select
              label="Year / Semester"
              name="semester"
              value={form.semester}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            >
              {semesters.map((s) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </TextField>

            <Button
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              fullWidth
              className='submit-btn'
            >
              View Results
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}