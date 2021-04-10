import Button from '../common/button/button';

const User = (props) => {
  const {userId, userName, emailAddress, createdAt, deleteUser} = props

  return(
    <div key={userId} style={{margin: "10px 0"}}>
      <div>id = {userId}</div>
      <div>userName = {userName}</div>
      <div>emailAddress = {emailAddress}</div>
      <div>createdAt = {createdAt}</div>
      <Button text="Delete" onClick={() => deleteUser(userId)}/>
    </div>
  )
  
}

User.defaultProps = {
  id:'',
  userName: '',
  emailAddress: '',
  createdAt: ''
};

export default User