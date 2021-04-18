import React, {useReducer} from 'react';
import { postRequest, API_URL } from '../../api';
import Label from '../common/label/label';
import Input from '../common/input/input';
import Button from '../common/button/button';

function userReducer(state, action) { 
  switch(action.type) {
    case "UPDATE_INPUT":
      return {...state, [action.key]: action.value};
    default:
      break;
  }
}

const UserForm = (props) => {
  // const [userName, setUserName] = useState(''); 
  // const [emailAddress, setEmailAddress] = useState('');

  const initialState = {userName: '', emailAddress: ''};
  const [userInfo, dispatch] = useReducer(userReducer, initialState);

  const handleUserSubmit = (e) => {
    e.preventDefault(); 
    console.log(userInfo);
    // ajax
    postRequest(API_URL + '/user/create', userInfo, (data) => {
      console.log(data);
      window.location.reload();
    });
  }

  return (
    <form onSubmit={handleUserSubmit}>
      <div>User Form</div>
      <div>
        <Label label="user name">
          <Input type="text" 
                  name="userName" 
                  value={userInfo.userName} 
                  onChange={(e) => dispatch({type: 'UPDATE_INPUT', key:e.target.name, value: e.target.value})} />
        </Label>
      </div>
      <div>
        <Label label="email address">
          <Input type="text" 
                  name="emailAddress"
                  value={userInfo.emailAddress} 
                  onChange={(e) => dispatch({type: 'UPDATE_INPUT', key:e.target.name, value: e.target.value})} />
        </Label>
      </div>
      <Button type="submit" text="Create"/>
    </form>
  )
}

export default UserForm