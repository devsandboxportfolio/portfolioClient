import React, {useState, useEffect} from 'react';
import { getRequest, deleteRequest } from '../../api';
import Loading from '../common/loading/loading';
import User from '../user/user';
import UserForm from '../user/form';

const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRequest(process.env.REACT_APP_API_URL + '/user/', (data) => {
      console.log(data);
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const deleteUser= (userId) => {
    deleteRequest(process.env.REACT_APP_API_URL + '/user/' + userId, (data) => {
      setUsers(data);
    });
  }

  return (
    <>
    {loading && <Loading />}
        {users.map(user => {
          return <User
                    userId={user._id} 
                    userName={user.userName} 
                    emailAddress={user.emailAddress} 
                    createdAt={user.createdAt} 
                    deleteUser={deleteUser}/>
        })}
    <UserForm/>
    </>
  )
}

export default UserList