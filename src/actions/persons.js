import axios from "../axios/axios";

const _addPerson = person => ({
  type: "ADD_PERSON",
  person
});

export const addPerson = (
  personData = {
    name: "",
    year: "",
    sex: ""
    // language: "",
    // relationStatus: "",
    // educationLevel: ""
    // colonoscopyStatus;
  }
) => {
  return dispatch => {
    const person = {
      name: personData.name,
      year: personData.year,
      sex: personData.sex
      // language: personData.language,
      // relationStatus: personData.relationStatus,
      // educationLevel: personData.educationLevel
    };

    return axios.post("persons/create", person).then(result => {
      dispatch(_addPerson(result.data));
    });
  };
};

const _removePerson = ({ id } = {}) => ({
  type: "REMOVE_PERSON",
  id
});

export const removePerson = ({ id } = {}) => {
  return dispatch => {
    return axios.delete(`persons/${id}`).then(() => {
      dispatch(_removePerson({ id }));
    });
  };
};

const _getPersons = persons => ({
  type: "GET_PERSONs",
  persons
});

export const getPersons = () => {
  return dispatch => {
    return axios.get("persons").then(result => {
      const persons = [];

      result.data.forEach(item => {
        persons.push(item);
      });

      dispatch(_getPersons(persons));
    });
  };

  // const _editBook = (id, updates) => ({
  //     type: 'EDIT_BOOK',
  //     id,
  //     updates
  // });

  // export const editBook = (id, updates) => {
  //     return (dispatch) => {
  //         return axios.put(`books/${id}`, updates).then(() => {
  //             dispatch(_editBook(id, updates));
  //         });
  //     }
  // };
};
