import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Link, useNavigate } from 'react-router-dom'

const Navigate = () => {
  const navigate = useNavigate()

  return (
    <div>
      <AppBar position='static' sx={{ backgroundColor: '#179700', px: 4 }}>
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1 }}><b>Voice Point</b></Typography>
          <Stack direction='row' spacing={2}>
            <Link to='/userhome' style={{ textDecoration: 'none' }}>
              <Button variant='contained' sx={{ color: '#179700', backgroundColor: 'white' }}><strong>Dashboard</strong></Button>
            </Link>
            <Link to='/newcomplaint' style={{ textDecoration: 'none' }}>
              <Button variant='contained' sx={{ color: '#179700', backgroundColor: 'white' }}><strong>New Complaint</strong></Button>
            </Link>
            <Link to='/usercomplaintlist' style={{ textDecoration: 'none' }}>
              <Button variant='contained' sx={{ color: '#179700', backgroundColor: 'white' }}><strong>My Complaints</strong></Button>
            </Link>
            <Button variant='contained' sx={{ color: '#179700', backgroundColor: 'white' }} onClick={() => navigate('/')}><strong>Logout</strong></Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: '32px' }} />
    </div>
  )
}

export default Navigate