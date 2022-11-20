import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';



const Navbar = () => {

  const { darkMode, toggle } = useContext(DarkModeContext)
  const { currentUser, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout();
  }

  const navigate = useNavigate();

  const home = () => {
    navigate('/');
  }

  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span>dukesocial</span>
        </Link>
        <HomeOutlinedIcon onClick={home} style={{ cursor: 'pointer' }} />
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle} />}
        <GridViewOutlinedIcon />

        <div className="search">
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search' />
        </div>


      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="user" />
          <span>{currentUser.name}</span>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar