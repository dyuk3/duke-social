import './leftSideBar.scss';
import {
  Friends,
  Groups,
  Market,
  Watch,
  Memories,
  Events,
  Gaming,
  Gallery,
  Videos,
  Messages,
  Tutorials,
  Courses,
  Fund,
} from '../../assets';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const LeftSideBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='leftSideBar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
            <img
              src={currentUser.profilePic}
              alt='user'
            />
            <span>{currentUser.name}</span>
          </div>
          <div className='item'>
            <img
              src={Friends}
              alt='friends'
            />
            <span>Friends</span>
          </div>
          <div className='item'>
            <img
              src={Groups}
              alt='groups'
            />
            <span>Groups</span>
          </div>
          <div className='item'>
            <img
              src={Market}
              alt='marketplace'
            />
            <span>Marketplace</span>
          </div>
          <div className='item'>
            <img
              src={Watch}
              alt='watch'
            />
            <span>Watch</span>
          </div>
          <div className='item'>
            <img
              src={Memories}
              alt='memories'
            />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className='item'>
            <img
              src={Events}
              alt='events'
            />
            <span>Events</span>
          </div>
          <div className='item'>
            <img
              src={Gaming}
              alt='gaming'
            />
            <span>Gaming</span>
          </div>
          <div className='item'>
            <img
              src={Gallery}
              alt='gallery'
            />
            <span>Gallery</span>
          </div>
          <div className='item'>
            <img
              src={Videos}
              alt='videos'
            />
            <span>Videos</span>
          </div>
          <div className='item'>
            <img
              src={Messages}
              alt='messages'
            />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className='item'>
            <img
              src={Fund}
              alt='fundraiser '
            />
            <span>Fundraiser</span>
          </div>
          <div className='item'>
            <img
              src={Tutorials}
              alt='tutorial'
            />
            <span>Tutorial</span>
          </div>
          <div className='item'>
            <img
              src={Courses}
              alt='courses'
            />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
