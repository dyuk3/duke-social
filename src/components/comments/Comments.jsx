import { useContext } from 'react'
import './comments.scss'
import { AuthContext } from '../../context/authContext'

const Comments = () => {

  const { currentUser } = useContext(AuthContext);

  //temporary comments 
  const comments = [
    {
      id: 1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sed veritatis hic dolores, beatae praesentium distinctio recusandae quo quidem quam, vero eius impedit consequatur optio nam totam nesciunt excepturi pariatur?',
      name: 'John Doe',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam harum consequuntur, illo, quod sapiente aliquam quas ',
      name: 'Jane Doe',
      userId: 2,
      profilePic: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]
  return (
    <div className='comments'>

      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder='Write a Comment' />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="content">
            <span>{comment.name}</span>
            <p>{comment.desc} </p>
          </div>
          <span className='date'>2 hours ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments