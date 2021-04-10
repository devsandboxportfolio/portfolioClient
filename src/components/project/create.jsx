import React, {useReducer, useEffect} from 'react';
import {postRequest} from '../../api';
import Project from './project';
// common
import Button from '../common/button/button';
import Input from '../common/input/input';
import Label from '../common/label/label';
import Textarea from '../common/textarea/textarea';

function reducer (state, action) {
  switch (action.type) {
    case "UPDATE_ALL":
      return {...state, ...action.payload};
    default:
      break;
  }
};

const initState = {name: '', description: '', objectives: {}, createdAt: '', updatedAt: ''};

const Create = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const save = () => {
    postRequest('http://localhost:5000/project/', state, (data) => {
      console.log(data);
      if (data && data._id) {
        window.location.replace("http://localhost:3000/project/view/" + data._id);
      }
    });
  };

  return (
    <>
      <Project state={state} dispatch={dispatch} />
      <Button text="Save" onClick={save} />
    </>
  );
}

export default Create