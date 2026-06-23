import React from 'react'
import Navigate from './Navigate'
import { useParams, Link } from 'react-router-dom'
import { Box, Card, Chip, Typography, Button } from '@mui/material'

const statusColors = { Pending: 'warning', 'In Progress': 'info', Resolved: 'success' }

const ComplaintDetails = () => {
  const { id } = useParams()
  const fakeComplaints = [
    { id: '1', ctitle: 'Water shortage', category: 'Water Supply', cdesc: "There's been water shortage in the CSE department", location: 'CSE Block', status: 'Pending', date: '2026-06-10' },
    { id: '2', ctitle: 'Ceiling fans not working', category: 'Electrical', cdesc: 'The ceiling fans on the first floor of ME dept are not working', location: 'ME Block, 1st Floor', status: 'In Progress', date: '2026-06-12' }
  ]
  const complaint = fakeComplaints.find((c) => c.id === id)

  return (
    <div>
      <div><Navigate /></div>
      <Box sx={{ backgroundColor: '#f5f5f5', padding: '50px' }}>
        <Typography variant="h4" gutterBottom>Complaint Details</Typography>
        {!complaint ? <Typography>Complaint not found.</Typography> : (
          <Card sx={{ maxWidth: '600px', padding: '24px' }}>
            <Typography sx={{ marginBottom: '12px' }}><strong>Complaint ID:</strong> {complaint.id}</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Complaint Title:</strong> {complaint.ctitle}</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Complaint Category:</strong> {complaint.category}</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Complaint Description:</strong> {complaint.cdesc}</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Area of Issue:</strong> {complaint.location}</Typography>
            <Typography sx={{ marginBottom: '12px' }}><strong>Date Submitted:</strong> {complaint.date}</Typography>
            <Typography sx={{ marginBottom: '20px' }}><strong>Status:</strong> <Chip label={complaint.status} color={statusColors[complaint.status] || 'default'} size="small" /></Typography>
            <Link to='/usercomplaintlist'><Button variant='contained' sx={{ backgroundColor: '#179700', color: 'white' }}>Back to My Complaints</Button></Link>
          </Card>
        )}
      </Box>
    </div>
  )
}

export default ComplaintDetails