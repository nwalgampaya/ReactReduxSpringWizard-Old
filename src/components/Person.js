import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removePerson } from "../actions/persons";

const Person = ({ id, name, year, sex,  dispatch }) => (
  <div>
    <Link to={`/person/${id}`}>
      <h4>
        {name} ({year})
      </h4>
    </Link>
    <p>saaa: {name}</p>
    {year && <p>{year}</p>}
    <button
      onClick={() => {
        dispatch(removePerson({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(Person);
