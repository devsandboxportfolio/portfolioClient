import {useReducer} from 'react';
import { login } from '../../api';
import Label from '../common/label/label';
import Input from '../common/input/input';
import Button from '../common/button/button';

function loginReducer(state, action) {
  switch (action.type) {
    case "UPDATE_ALL":
      return {...state, ...action.payload};
    default:
      break;
  }
}

const initState = {email: "", password: ""};

const LoginForm = (props) => {
  const [state, dispatch] = useReducer(loginReducer, initState);
  const {
    email,
    password,
  } = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      login(state);
    }
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    dispatch({type: "UPDATE_ALL", payload: {...state, [name]: value}});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label label="Email Address">
          <Input name="email" value={email} onChange={handleInputChange} />
        </Label>
        <Label label="Password">
          <Input name="password" value={password} onChange={handleInputChange} />
        </Label>
        <Button type="submit" text="Login!" />
      </form>
    </>
  );
}

export default LoginForm