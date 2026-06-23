import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Chip, Box, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import ANavigate from './ANavigate'
import { Link } from 'react-router-dom'

const categories = ['Classroom', 'Laboratory', 'Hostel', 'Library', 'Internet/Wi-Fi', 'Electrical', 'Water Supply', 'Cleanliness', 'Other']
const statuses = ['Pending', 'In Progress', 'Resolved']
const statusColors = { Pending: 'warning', 'In Progress': 'info', Resolved: 'success' }

const AllComplaints = () => {
  const [complaints, setComplaints] = useState([
    { id: 1, ctitle: 'Water shortage', category: 'Water Supply', cdesc: "There's been water shortage in the CSE department", location: 'CSE Block', status: 'Pending', date: '2026-06-10', raisedByName: 'Aditi Sharma', raisedByEmail: 'aditi.sharma@college.edu' },
    { id: 2, ctitle: 'Ceiling fans not working', category: 'Electrical', cdesc: 'The ceiling fans on the first floor of ME dept are not working', location: 'ME Block, 1st Floor', status: 'In Progress', date: '2026-06-12', raisedByName: 'Rahul Verma', raisedByEmail: 'rahul.verma@college.edu' },
    { id: 3, ctitle: 'Wi-Fi not working in library', category: 'Internet/Wi-Fi', cdesc: 'Wi-Fi has been down in the library for two days', location: 'Main Library', status: 'Resolved', date: '2026-06-08', raisedByName: 'Priya Nair', raisedByEmail: 'priya.nair@college.edu' }
  ])
  const [categoryFilter, setCategoryFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [dateFilter, setDateFilter] = useState('')

  const handleStatusChange = (id, newStatus) => setComplaints((prev) => prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c)))

  const filteredComplaints = complaints.filter((c) =>
    (categoryFilter === '' || c.category === categoryFilter) &&
    (statusFilter === '' || c.status === statusFilter) &&
    (dateFilter === '' || c.date === dateFilter)
  )

  return (
    <>
      <div><ANavigate /></div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px' }}>
        <Typography variant="h4" gutterBottom>All Complaints</Typography>
        <Box sx={{ display: 'flex', gap: 2, marginBottom: '24px', flexWrap: 'wrap' }}>
          <FormControl sx={{ minWidth: 200, backgroundColor: 'white' }}>
            <InputLabel>Category</InputLabel>
            <Select label='Category' value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <MenuItem value=''>All Categories</MenuItem>
              {categories.map((cat) => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 180, backgroundColor: 'white' }}>
            <InputLabel>Status</InputLabel>
            <Select label='Status' value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <MenuItem value=''>All Statuses</MenuItem>
              {statuses.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
            </Select>
          </FormControl>
          <TextField label='Date Submitted' type='date' value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} sx={{ backgroundColor: 'white' }} InputLabelProps={{ shrink: true }} />
        </Box>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Complaint ID</strong></TableCell>
                <TableCell><strong>Title</strong></TableCell>
                <TableCell><strong>Raised By</strong></TableCell>
                <TableCell><strong>Category</strong></TableCell>
                <TableCell><strong>Location</strong></TableCell>
                <TableCell><strong>Date Submitted</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Update Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredComplaints.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell><Link to={`/admin/complaint/${row.id}`} style={{ color: '#179700', textDecoration: 'underline' }}>{row.ctitle}</Link></TableCell>
                  <TableCell>{row.raisedByName}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell><Chip label={row.status} color={statusColors[row.status] || 'default'} size="small" /></TableCell>
                  <TableCell>
                    <FormControl size='small' sx={{ minWidth: 140, backgroundColor: 'white' }}>
                      <Select value={row.status} onChange={(e) => handleStatusChange(row.id, e.target.value)}>
                        {statuses.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              ))}
              {filteredComplaints.length === 0 && <TableRow><TableCell colSpan={8} align="center">No complaints match the selected filters.</TableCell></TableRow>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default AllComplaints