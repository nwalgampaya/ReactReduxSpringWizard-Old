import React from "react";

export default class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onSexChange = this.onSexChange.bind(this);
    // this.onPublishedChange = this.onPublishedChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: props.person ? props.person.name : "",
      year: props.person ? props.person.year : "",
      sex: props.person ? props.person.sex : "",
      //   language: props.person.language ? props.person.language : "",
      //   relationStatus: props.person.relationStatus
      //     ? props.person.relationStatus
      //     : "",
      //   educationLevel: props.person.educationLevel
      //     ? props.person.educationLevel
      //     : "",

      error: ""
    };
  }

  onNameChange(e) {
    const name = e.target.value;
    this.setState(() => ({ name: name }));
  }

  onYearChange(e) {
    const year = e.target.value;
    this.setState(() => ({ year: year }));
  }

  onSexChange(e) {
    const sex = e.target.value;
    this.setState(() => ({ sex: sex }));
  }

  //   onPublishedChange(e) {
  //     const published = parseInt(e.target.value);
  //     this.setState(() => ({ published: published }));
  //   }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.name || !this.state.year || !this.state.sex) {
      this.setState(() => ({
        error: "Please set name & year & sex!"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmitPerson({
        name: this.state.name,
        year: this.state.year,
        sex: this.state.sex
        // published: this.state.published
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form onSubmit={this.onSubmit} className="add-book-form">
          <input
            type="text"
            placeholder="name"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <br />

          <input
            type="text"
            placeholder="year"
            value={this.state.year}
            onChange={this.onYearChange}
          />
          <br />

          <textarea
            placeholder="sex"
            value={this.state.sex}
            onChange={this.onSexChange}
          />
          <br />

          {/* <input
            type="number"
            placeholder="published"
            value={this.state.published}
            onChange={this.onPublishedChange}
          /> */}
          <br />
          <button>Add Persons</button>
        </form>
      </div>
    );
  }
}
