import React, {useReducer, useEffect} from 'react';
import {getRequest, deleteRequest} from '../../api';

function reducer (state, action) {
  switch (action.type) {
    case "UPDATE_ALL":
      return {...state, ...action.payload};
    case "UPDATE_PROJECTS":
      return {...state, projects: action.payload}
    default:
      break;
  }
};

const initState = {projects: [], loading: 0};

const List = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const {projects, loading} = state;

  useEffect(
    () => {
      getRequest('http://localhost:5000/project', (data) => {
        if (data) {
          dispatch({type: 'UPDATE_ALL', payload: {loading: 1, projects: data}});
        }
      });
    },
    [loading]
  );

  const redirect = (event) => {
    const action = event.target.getAttribute('action');
    const index  = event.target.getAttribute('index');
    
    var url = "/project/";
    switch (action) {
      case "create":
        url += "create";
        break;
      case "view":
        if (state.projects[index]) {
          url += "view/" + state.projects[index]._id;
        } else {
          return;
        }
        break;
      case "update":
        if (state.projects[index]) {
          url += "update/" + state.projects[index]._id;
        } else {
          return;
        }
        break;
      default:
        return;
    }

    window.location.replace(url);
  }

  const deleteProject = (event) => {
    const index = event.target.getAttribute('index');
    
    if (projects[index]) {
      deleteRequest("http://localhost:5000/project/" + projects[index]._id, (data) => {
        console.log(data);
        if (data) {
          const newProjects = state.projects;
          delete newProjects[index];
          dispatch({type: 'UPDATE_PROJECTS', payload: newProjects});
        };
      });
    }
  };

  return (
    <>
      <div>
        <button action="create" onClick={redirect}>Create</button>
      </div>
      {projects.map((project, index) => {
        return (
          <div key={project._id} style={{borderBottom: '1px solid black'}}>
            <p>Id: {project._id}</p>
            <p>Name: {project.name}</p>
            <p>Description: {project.description}</p>
            <p>Created At: {project.createdAt}</p>
            <p>Updated At: {project.updatedAt}</p>
            <button action="view" index={index} onClick={redirect}>View</button>
            <button action="update" index={index} onClick={redirect}>Update</button>
            <button index={index} onClick={deleteProject}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default List