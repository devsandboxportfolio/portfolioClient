import React, { useEffect, useState } from 'react';
import Button from '../common/button/button';
import Input from '../common/input/input';
import Label from '../common/label/label';
import Textarea from '../common/textarea/textarea';

const Project = (props) => {
  const {state, dispatch, disabled} = props;
  const {name, description, objectives, createdAt, updatedAt} = state;
  const [newObjectiveName, updateObjectiveName] = useState('');

  const handleChange = (event) => {
    const {name: targetName, value} = event.target;
    handleDispatch(targetName, value);
  }

  const objectiveChange = (event) => {
    const {name: targetName, value} = event.target;
    var newObjectives = objectives;
    newObjectives[targetName] = value;
    handleDispatch('objectives', newObjectives);
  }

  const handleDispatch = (targetName, targetValue) => {
    dispatch({type: "UPDATE_ALL", payload: {...state, [targetName]: targetValue}});
  }

  const addObjective = () => {
    if (newObjectiveName) {
      var newObjectives = objectives;
      newObjectives[newObjectiveName] = "";
      handleDispatch("objectives", newObjectives);
      updateObjectiveName("");
    }
  };

  const removeObjective = (objectiveName) => {
    var newObjectives = objectives;
    delete(newObjectives[objectiveName]);
    handleDispatch("objectives", newObjectives);
  }

  const timesUI = state._id ? (
    <>
      <div style={{borderTop: "1px solid black", marginTop: "10px"}}>&nbsp;</div>
      <Label label="Created At">
        <Input name="createdAt" value={createdAt} disabled={true} />
      </Label>
      <Label label="Updated At">
        <Input name="updatedAt" value={updatedAt} disabled={true} />
      </Label>
    </>) : "";

  const objectiveUI = disabled ? "" : (
    <div style={{borderTop: "1px solid black", borderBottom: "1px solid black", margin: "5px 0", padding: "5px 0"}}>
      <Label label="Add Objective">
        <Input name="newObjectiveName" value={newObjectiveName} onChange={e => updateObjectiveName(e.target.value)} />
        <Button text="Add objective" onClick={addObjective} />
      </Label>
      {timesUI}
    </div>
  );

  const renderObjectives = () => {
    var objectivesList = [];
    var i = 0;
    const removeButton = disabled ? "" : <Button text="Remove this objective" onClick={e => removeObjective(objectiveName)} />;

    for (var objectiveName in objectives) {
      objectivesList.push(
        <Label label={objectiveName} key={i}>
          <Textarea name={objectiveName} value={objectives[objectiveName]} onChange={objectiveChange} disabled={disabled} />
          {removeButton}
        </Label>
      );
      
      i++;
    }

    if (objectivesList.length < 1) {
      objectivesList.push((<span style={{color: "grey"}}>None</span>));
    }
    
    return objectivesList;
  }

  var objectivesList = renderObjectives();


  return (
    <>
      <Label label="name">
        <Input name="name" value={name} onChange={handleChange} disabled={disabled} />
      </Label>
      <Label label="description">
        <Textarea name="description" value={description} onChange={handleChange} disabled={disabled} />
      </Label>
      <Label label="objectives"/>
      {renderObjectives()}
      {objectiveUI}
    </>
  );
}

export default Project;