// Write your JS code here
import './index.css'

const UserInfo = () => (
  <div className="user-info-card">
    <img
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      alt="profile"
      className="profile-img"
    />
    <div>
      <h1 className="username">Wade Warren</h1>
      <p className="designation">Software developer at UK</p>
    </div>
  </div>
)

export default UserInfo
