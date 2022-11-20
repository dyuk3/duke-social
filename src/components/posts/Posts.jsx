import Post from '../post/Post'
import './posts.scss'

const Posts = () => {
  //  dummy data
  const posts = [
    {
      id: 1,
      name: 'John Doe',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/13996219/pexels-photo-13996219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem tenetur dolorem ',
      img: 'https://images.pexels.com/photos/10413404/pexels-photo-10413404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'John Doe',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/13996219/pexels-photo-13996219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem tenetur dolorem ',
    },
  ]

  return (
    <div className='posts'>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts