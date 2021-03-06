import React, {useReducer, useEffect} from 'react';
import { getRequest } from '../../api';
import Project from './project';

function reducer (state, action) {
  switch (action.type) {
    case "UPDATE_ALL":
      return {...state, ...action.payload};
    default:
      break;
  }
};

const initState = {_id: '', name: '', description: '', objectives: {}, createdAt: '', updatedAt: ''};

const View = (props) => {
  const {params} = props.match;
  const [state, dispatch] = useReducer(reducer, initState);

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
      <Project state={state} disabled={true} />
    </>
  );
}

export default View