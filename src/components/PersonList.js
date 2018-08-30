import React from "react";
import { connect } from "react-redux";
import Person from "./Person";

const PersonList = props => (
  <div>
    Person List:
    <p>in List</p>
    <ul>
      {props.persons.map(person => {
        return (
          <li key={person.id}>
            <Person {...person} />
          </li>
        );
      })}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    persons: state
  };
};

export default connect(mapStateToProps)(PersonList);
