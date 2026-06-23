import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Chip, Button } from '@mui/material'
import Navigate from './Navigate'
import { Link, useNavigate } from 'react-router-dom'

const statusColors = { Pending: 'warning', 'In Progress': 'info', Resolved: 'success' }

function ViewAllCom() {
  const navigate = useNavigate()
  const [complaints, setComplaints] = useState([
    { id: 1, ctitle: 'Water shortage', category: 'Water Supply', cdesc: "There's been water shortage in the CSE department", location: 'CSE Block', status: 'Pending', date: '2026-06-10' },
    { id: 2, ctitle: 'Ceiling fans not working', category: 'Electrical', cdesc: 'The ceiling fans on the first floor of ME dept are not working', location: 'ME Block, 1st Floor', status: 'In Progress', date: '2026-06-12' }
  ])

  const handleEdit = (id) => navigate(`/editcomplaint/${id}`)
  const handleDelete = (id) => setComplaints((prev) => prev.filter((c) => c.id !== id))

  return (
    <>
      <div><Navigate /></div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px' }}>
        <Typography variant="h4" gutterBottom>My Complaints</Typography>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Complaint ID</strong></TableCell>
                <TableCell><strong>Title</strong></TableCell>
                <TableCell><strong>Category</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Date Submitted</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Edit</strong></TableCell>
                <TableCell><strong>Delete</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {complaints.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell><Link to={`/complaintdetails/${row.id}`} style={{ color: '#179700', textDecoration: 'underline' }}>{row.ctitle}</Link></TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.cdesc}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell><Chip label={row.status} color={statusColors[row.status] || 'default'} size="small" /></TableCell>
                  <TableCell><Button variant='contained' sx={{ color: 'white', backgroundColor: '#179700' }} onClick={() => handleEdit(row.id)} disabled={row.status !== 'Pending'}>Edit</Button></TableCell>
                  <TableCell><Button variant='contained' sx={{ color: 'white', backgroundColor: '#179700' }} onClick={() => handleDelete(row.id)}>Delete</Button></TableCell>
                </TableRow>
              ))}
              {complaints.length === 0 && <TableRow><TableCell colSpan={8} align="center">No complaints submitted yet.</TableCell></TableRow>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default ViewAllCom