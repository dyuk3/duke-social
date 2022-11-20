import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './stories.scss'

const Stories = () => {

  const { currentUser } = useContext(AuthContext)

  // temporary dummy data 

  const stories = [
    {
      id: 1,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/14300321/pexels-photo-14300321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/5546907/pexels-photo-5546907.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
    {
      id: 3,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/5546907/pexels-photo-5546907.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
    {
      id: 4,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/5546907/pexels-photo-5546907.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
  ]

  return (
    <div className='stories'>
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) =>
      (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      )
      )}
    </div>
  )
}

export default Stories