import './rightSideBar.scss'

const RightSideBar = () => {
  return (
    <div className='rightSideBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <span className='userName'>Jane Doe</span>
            </div>
            <div className="buttons">
              <button className='follow'>follow</button>
              <button className='dismiss'>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <span className='userName'>Jane Doe</span>
            </div>
            <div className="buttons">
              <button className='follow'>follow</button>
              <button className='dismiss'>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <p>
                <span className='userName'>Jane Doe</span>
                changed their cover picture
              </p>
            </div>
            <div className="time">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <p>

                <span className='userName'>Jane Doe</span>
                liked a post
              </p>
            </div>
            <div className="time">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <p>
                <span className='userName'>Jane Doe</span>
                like a comment
              </p>
            </div>
            <div className="time">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <p>
                <span className='userName'>Jane Doe</span>
                posted
              </p>
            </div>
            <div className="time">
              <span>1 min ago</span>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <div className="online" />
              <span className='userName'>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <div className="online" />
              <span className='userName'>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <div className="online" />
              <span className='userName'>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <div className="online" />
              <span className='userName'>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <div className="online" />
              <span className='userName'>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/14139354/pexels-photo-14139354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user" />
              <div className="online" />
              <span className='userName'>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar