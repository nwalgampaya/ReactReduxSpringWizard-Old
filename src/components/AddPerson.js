import React from "react";
import PersonForm from "./PersonForm";
import { connect } from "react-redux";
import { addPerson } from "../actions/persons";
import App from "../App";

const AddPerson = props => (
  <div>
    <h3>Set Person information:</h3>
    <App className='step-progress'
      onSubmitPerson={person => {
        props.dispatch(addPerson(person));
        props.history.push("/");
      }}
    />
    {/* <PersonForm
      onSubmitPerson={person => {
        props.dispatch(addPerson(person));
        props.history.push("/");
      }}
    /> */}
  </div>
);

export default connect()(AddPerson);
