import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Registration from './components/Registration'
import Login from './components/Login'
import Home from './components/user/Home'
import NewComplaint from './components/user/NewComplaint'
import NewComSubmitted from './components/user/NewComSubmitted'
import ViewAllCom from './components/user/ViewAllCom'
import ComplaintDetails from './components/user/ComplaintDetails'
import Editcomplaint from './components/user/Editcomplaint'
import AHome from './components/admin/AHome'
import AllComplaints from './components/admin/AllComplaints'
import CDetails from './components/admin/CDetails'
import Userlist from './components/admin/Userlist'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/userhome' element={<Home/>}/>
      <Route path='/newcomplaint' element={<NewComplaint/>}/>
      <Route path='/complaintsubmitted' element={<NewComSubmitted/>}/>
      <Route path='/editcomplaint/:id' element={<Editcomplaint/>}/>
      <Route path='/usercomplaintlist' element={<ViewAllCom/>}/>
      <Route path='/complaintdetails/:id' element={<ComplaintDetails/>}/>

      <Route path='/adminhome' element={<AHome/>}/>
      <Route path='/admin/complaints' element={<AllComplaints/>}/>
      <Route path='/admin/complaint/:id' element={<CDetails/>}/>
      <Route path='/admin/users' element={<Userlist/>}/>
    </Routes>
  )
}

export default App