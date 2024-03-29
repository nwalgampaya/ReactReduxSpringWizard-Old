import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { addPerson } from "./components/AddPerson";
import { connect } from "react-redux";
import { Field } from 'react-final-form'
import Wizard from './Wizard'
import './App.css';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onSexChange = this.onSexChange.bind(this);
    // this.onPublishedChange = this.onPublishedChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: props.person ? props.person.name : "",
      year: props.person ? props.person.year : "",
      sex: props.person ? props.person.sex : "",


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

  // connect()
  /*
  Old Form
  <div >
              <label>Name</label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Jhon"
                validate={required}
                value={this.state.name}
                // onChange={this.onNameChange}
  
              />
              <Error name="name" />
            </div>
            <div>
              <label>Gender</label>
              <Field
                name="sex"
                component="input"
                type="text"
                placeholder="Male"
                validate={required}
                value={this.state.sex}
                // onChange={this.onSexChange}
              />
              <Error name="year" />
            </div>
            <div>
              <label>Year</label>
              <Field
                name="year"
                component="input"
                type="text"
                placeholder="1999"
                validate={required}
                value={this.state.year}
                // onChange={this.onYearChange}
              />
              <Error name="year" />
            </div>
  */


  render() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
      // e.preventDefault();

      await sleep(300)

      // this.state.name = "rrrr";
      // this.state.year = "4444";
      // this.state.sex = "No";
      if (!this.state.name || !this.state.year || !this.state.sex) {
        console.log("In submit If" + this.state.name);
        this.setState(() => ({
          error: "Please set name & year & sex!"
        }));
      } else {
        console.log("In submit else");
        this.setState(() => ({ error: "" }));
        this.props.onSubmitPerson({
          name: this.state.name,
          year: this.state.year,
          sex: this.state.sex
          // published: this.state.published
        });
        window.alert(JSON.stringify(values, 0, 2))
      }
    }

    const Error = ({ name }) => (
      <Field
        name={name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
          touched && error ? <span>{error}</span> : null
        }
      />
    )

    // const required = value => (value ? undefined : 'Required')

    function required(value) {
      return value ? undefined : 'Required'
    }

    return (
      <Wizard
        initialValues={{ employed: true, stooge: 'larry' }}
        onSubmit={onSubmit}
      >
        <Wizard.Page >
          <div >
            <p>The CRISP-Q study.</p>
            <p>Researchers: Yena (Grace) Kim (Scholarly Selective Student), Prof Jon Emery, A/Prof Marie Pirotta and Dr Jennifer Walker The Department of General Practice, University of Melbourne</p>

            <p>Thank you for taking part in this study. We are interested in how people think about their risk of bowel cancer and their use of bowel cancer screening tests</p>
            <p>Who can participate? </p>
            <p>Any person 40 years or older but younger than 75, attending a GP appointment at Deepdene Surgery can participate in the study.</p>
            <p>What are the risks?</p>
            <p>This survey is completely anonymous and therefore confidential, so there is no risk that we will know who said what. This study is completely voluntary and to withdraw during the study simply stop answering the questions. Due to the anonymous nature of the study we will not be able to delete your data if you withdraw.</p>
            <p>If you are concerned about your risk of bowel cancer, please discuss this with your doctor today.</p>
          </div>
        </Wizard.Page>
        <Wizard.Page >
          <div >
            <label>Name</label>
            <input
              type="text"
              placeholder="name"
              autoFocus
              value={this.state.name}
              onChange={this.onNameChange}
            />
            <Error name="name" />
          </div>
          <div>
            <label>Gender</label>
            <input
              type="text"
              placeholder="year"
              value={this.state.year}
              onChange={this.onYearChange}
            />
            <Error name="year" />
          </div>
          <div>

            <textarea
              placeholder="sex"
              value={this.state.sex}
              onChange={this.onSexChange}
            />
            <Error name="year" />
          </div>
        </Wizard.Page>
        {/* <Wizard.Page
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        }
        if (!values.favoriteColor) {
          errors.favoriteColor = 'Required'
        }
        return errors
      }}
    >
      <div>
        <label>Email</label>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Email"
        />
        <Error name="email" />
      </div>
      <div>
        <label>Favorite Color</label>
        <Field name="favoriteColor" component="select">
          <option />
          <option value="#ff0000">❤️ Red</option>
          <option value="#00ff00">💚 Green</option>
          <option value="#0000ff">💙 Blue</option>
        </Field>
        <Error name="favoriteColor" />
      </div>
    </Wizard.Page>
    <Wizard.Page
      validate={values => {
        const errors = {}
        if (!values.toppings) {
          errors.toppings = 'Required'
        } else if (values.toppings.length < 2) {
          errors.toppings = 'Choose more'
        }
        return errors
      }}
    >
      <div>
        <label>Employed?</label>
        <Field name="employed" component="input" type="checkbox" />
      </div>
      <div>
        <label>Toppings</label>
        <Field name="toppings" component="select" multiple>
          <option value="ham">🐷 Ham</option>
          <option value="mushrooms">🍄 Mushrooms</option>
          <option value="cheese">🧀 Cheese</option>
          <option value="chicken">🐓 Chicken</option>
          <option value="pineapple">🍍 Pinapple</option>
        </Field>
        <Error name="toppings" />
      </div>
    </Wizard.Page>
    <Wizard.Page
      validate={values => {
        const errors = {}
        if (!values.notes) {
          errors.notes = 'Required'
        }
        return errors
      }}
    >
      <div>
        <label>Best Stooge?</label>
        <div>
          <label>
            <Field
              name="stooge"
              component="input"
              type="radio"
              value="larry"
            />{' '}
            Larry
          </label>
          <label>
            <Field name="stooge" component="input" type="radio" value="moe" />{' '}
            Moe
          </label>
          <label>
            <Field
              name="stooge"
              component="input"
              type="radio"
              value="curly"
            />{' '}
            Curly
          </label>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <Field name="notes" component="textarea" placeholder="Notes" />
        <Error name="notes" />
      </div>
    </Wizard.Page> */}
      </Wizard>
    );
  }
}
export default (App);