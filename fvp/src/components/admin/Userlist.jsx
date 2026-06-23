import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Chip, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import ANavigate from './ANavigate'

const roleColors = { Student: 'info', Admin: 'success' }

const Userlist = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Aditi Sharma', email: 'aditi.sharma@college.edu', role: 'Student' },
    { id: 2, name: 'Rahul Verma', email: 'rahul.verma@college.edu', role: 'Student' },
    { id: 3, name: 'Priya Nair', email: 'priya.nair@college.edu', role: 'Student' },
    { id: 4, name: 'Dr. Anand Kumar', email: 'anand.kumar@college.edu', role: 'Admin' }
  ])
  const [roleFilter, setRoleFilter] = useState('')
  const [savedId, setSavedId] = useState(null)

  const handleRoleChange = (id, newRole) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role: newRole } : u)))
    setSavedId(id)
    setTimeout(() => setSavedId(null), 1500)
  }

  const filteredUsers = users.filter((u) => roleFilter === '' || u.role === roleFilter)

  return (
    <>
      <div><ANavigate /></div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px' }}>
        <Typography variant="h4" gutterBottom>Registered Users</Typography>
        <Box sx={{ marginBottom: '24px' }}>
          <FormControl sx={{ minWidth: 180, backgroundColor: 'white' }}>
            <InputLabel>Role</InputLabel>
            <Select label='Role' value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
              <MenuItem value=''>All Roles</MenuItem>
              <MenuItem value='Student'>Student</MenuItem>
              <MenuItem value='Admin'>Admin</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>User ID</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Current Role</strong></TableCell>
                <TableCell><strong>Change Role</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((u) => (
                <TableRow key={u.id}>
                  <TableCell>{u.id}</TableCell>
                  <TableCell>{u.name}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell><Chip label={u.role} color={roleColors[u.role] || 'default'} size="small" /></TableCell>
                  <TableCell>
                    <FormControl size='small' sx={{ minWidth: 140, backgroundColor: 'white' }}>
                      <Select value={u.role} onChange={(e) => handleRoleChange(u.id, e.target.value)}>
                        <MenuItem value='Student'>Student</MenuItem>
                        <MenuItem value='Admin'>Admin</MenuItem>
                      </Select>
                    </FormControl>
                    {savedId === u.id && <Typography sx={{ color: '#179700', fontSize: '0.8rem', marginTop: '4px' }}>Updated</Typography>}
                  </TableCell>
                </TableRow>
              ))}
              {filteredUsers.length === 0 && <TableRow><TableCell colSpan={5} align="center">No users found.</TableCell></TableRow>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default Userlist