import React, { useReducer, useEffect } from 'react';
import { getRequest, patchRequest } from '../../api';
import Project from './project';
// common
import Button from '../common/button/button';

function reducer (state, action) {
  switch (action.type) {
    case "UPDATE_ALL":
      return {...state, ...action.payload};
    default:
      break;
  }
};

const initState = {_id: '', name: '', description: '', objectives: {}, createdAt: '', updatedAt: ''};

const Update = (props) => {
  const {params} = props.match;
  const [state, dispatch] = useReducer(reducer, initState);

  const save = () => {
    if (state._id) {
      patchRequest(process.env.REACT_APP_API_URL + "/project/" + state._id, state, (data) => {console.log(data);});
    }
  }

  useEffect(
    () => {
      if (! params.projectId) {
        return;
      }
      getRequest(process.env.REACT_APP_API_URL + '/project/_id/' + params.projectId, (data) => {
        if (data._id && data._id === params.projectId) {
          dispatch({type: 'UPDATE_ALL', payload: data});
        }
      });
    },
    [params.projectId]
  );

  return (
    <>
      <Project state={state} dispatch={dispatch} />
      <Button text="Save" onClick={save} />
    </>
  );
}

export default Update