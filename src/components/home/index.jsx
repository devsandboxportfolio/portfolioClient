import React, {useReducer} from 'react';

function reducer (state, action) {
  switch (action.type) {
    case "UPDATE_TITLE":
      return {...state, title : action.payload};
    case "UPDATE_ALL":
      return {...state, ...action.payload};
    default:
      break;
  }
};

const initState = {title: 'aaa', contacts: []};

const Home = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const {title} = state;

  const handleClick = (event) => {
    const action = {type: "UPDATE_TITLE", payload: "NEW TITLE "};
    dispatch(action);
  }

  return (
    <React.Fragment>
      <div>{title} aaaa</div>
      <Button onClick={() => handleClick()} >{title}</Button>
    </React.Fragment>
  );
}

const Button = (props) => {
  const handleClick = () => {
    props.onClick();
  }
  return <button onClick={handleClick}>{props.children}</button>
}

export default Home