import React, { useEffect, useState } from 'react'
import { Button, MenuItem, TextField } from '@mui/material'
import Navigate from './Navigate'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import { useParams, useNavigate } from 'react-router-dom'

const categories = ['Classroom', 'Laboratory', 'Hostel', 'Library', 'Internet/Wi-Fi', 'Electrical', 'Water Supply', 'Cleanliness', 'Other']

const Editcomplaint = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fakeComplaints = [
      { id: '1', ctitle: 'Water shortage', category: 'Water Supply', cdesc: "There's been water shortage in the CSE department", location: 'CSE Block' },
      { id: '2', ctitle: 'Ceiling fans not working', category: 'Electrical', cdesc: 'The ceiling fans on the first floor of ME dept are not working', location: 'ME Block, 1st Floor' }
    ]
    const existing = fakeComplaints.find((c) => c.id === id)
    if (existing) {
      setTitle(existing.ctitle)
      setCategory(existing.category)
      setDescription(existing.cdesc)
      setLocation(existing.location)
    }
    setLoading(false)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    if (!title || !category || !description || !location) {
      setError("Please fill in all fields.")
      return
    }
    navigate('/usercomplaintlist')
  }

  if (loading) {
    return <div style={{ backgroundColor: '#f5f5f5', padding: '50px' }}><Navigate /><Typography sx={{ marginTop: '20px' }}>Loading complaint...</Typography></div>
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '50px' }}>
      <div><Navigate /></div>
      <div>
        <h1>Edit Complaint Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField label="Complaint Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} sx={{ width: '500px', backgroundColor: 'white' }} required /><br /><br />
          <FormControl sx={{ width: '500px', backgroundColor: 'white' }} variant='outlined'>
            <InputLabel>Complaint Category</InputLabel>
            <Select label='Complaint Category' value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((cat) => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
            </Select>
          </FormControl><br /><br />
          <TextField label="Complaint Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} sx={{ width: '500px', backgroundColor: 'white' }} multiline rows={4} /><br /><br />
          <TextField label="Location (area of issue)" variant="outlined" value={location} onChange={(e) => setLocation(e.target.value)} sx={{ width: '500px', backgroundColor: 'white' }} /><br /><br />
          {error && <Typography color='error' sx={{ marginBottom: '10px' }}>{error}</Typography>}
          <Button type='submit' variant="contained" sx={{ color: 'white', backgroundColor: '#179700' }}>Update Complaint</Button>
        </form>
      </div>
    </div>
  )
}

export default Editcomplaint