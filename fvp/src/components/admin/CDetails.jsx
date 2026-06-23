import React, { useEffect, useState } from 'react'
import ANavigate from './ANavigate'
import { useParams, Link } from 'react-router-dom'
import { Box, Card, Chip, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const statuses = ['Pending', 'In Progress', 'Resolved']
const statusColors = { Pending: 'warning', 'In Progress': 'info', Resolved: 'success' }

const CDetails = () => {
  const { id } = useParams()
  const [status, setStatus] = useState('')
  const [saved, setSaved] = useState(false)
  const fakeComplaints = [
    { id: '1', ctitle: 'Water shortage', category: 'Water Supply', cdesc: "There's been water shortage in the CSE department", location: 'CSE Block', status: 'Pending', date: '2026-06-10', raisedByName: 'Aditi Sharma', raisedByEmail: 'aditi.sharma@college.edu' },
    { id: '2', ctitle: 'Ceiling fans not working', category: 'Electrical', cdesc: 'The ceiling fans on the first floor of ME dept are not working', location: 'ME Block, 1st Floor', status: 'In Progress', date: '2026-06-12', raisedByName: 'Rahul Verma', raisedByEmail: 'rahul.verma@college.edu' },
    { id: '3', ctitle: 'Wi-Fi not working in library', category: 'Internet/Wi-Fi', cdesc: 'Wi-Fi has been down in the library for two days', location: 'Main Library', status: 'Resolved', date: '2026-06-08', raisedByName: 'Priya Nair', raisedByEmail: 'priya.nair@college.edu' }
  ]
  const complaint = fakeComplaints.find((c) => c.id === id)

  useEffect(() => { if (complaint) setStatus(complaint.status) }, [complaint])

  const handleUpdateStatus = () => setSaved(true)

  return (
    <div>
      <div><ANavigate /></div>
      <Box sx={{ backgroundColor: '#f5f5f5', padding: '50px' }}>
        <Typography variant="h4" gutterBottom>Complaint Details</Typography>
        {!complaint ? <Typography>Complaint not found.</Typography> : (
          <Card sx={{ maxWidth: '600px', padding: '24px' }}>
            <Typography sx={{ marginBottom: '12px' }}><strong>Complaint ID:</strong> {complaint.id}</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Complaint Title:</strong> {complaint.ctitle}</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Raised By:</strong> {complaint.raisedByName} ({complaint.raisedByEmail})</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Complaint Category:</strong> {complaint.category}</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Complaint Description:</strong> {complaint.cdesc}</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Area of Issue:</strong> {complaint.location}</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Date Submitted:</strong> {complaint.date}</Typography>
            <Typography sx={{ marginBottom: '20px' }}><strong>Current Status:</strong> <Chip label={complaint.status} color={statusColors[complaint.status] || 'default'} size="small" /></Typography>
            <FormControl sx={{ minWidth: 200, backgroundColor: 'white', marginBottom: '16px' }}>
              <InputLabel>Update Status</InputLabel>
              <Select label='Update Status' value={status} onChange={(e) => { setStatus(e.target.value); setSaved(false) }}>
                {statuses.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
              </Select>
            </FormControl><br />
            <Button variant='contained' sx={{ backgroundColor: '#179700', color: 'white', marginBottom: '16px' }} onClick={handleUpdateStatus}>Save Status</Button>
            {saved && <Typography sx={{ color: '#179700', marginBottom: '16px' }}>Status updated successfully.</Typography>}<br />
            <Link to='/admin/complaints'><Button variant='contained' sx={{ backgroundColor: '#179700', color: 'white' }}>Back to All Complaints</Button></Link>
          </Card>
        )}
      </Box>
    </div>
  )
}

export default CDetails