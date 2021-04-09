import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard';

const FIELDS = [
  { label: 'Survey Title', name: 'title'},
  { label: 'Subject Line', name: 'subject'},
  { label: 'Email Body', name: 'body'},
  { label: 'Recipient List', name: 'emails'},
]

class SurveyForm extends Component { 
  renderFields(){
   return _.map(FIELDS, ({ label, name}) => {
     return <Field component={SurveyField} type="text" label={label} name={name} key={name}/>
   })
   
  }
  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values=>console.log(values))}>
        {this.renderFields()}
        <Link to= {Dashboard}className="red btn-flat left white-text">cancel</Link>
        <button type="submit" className="teal btn-flat right white-text">Submit
        <i className="material-icons right">done</i></button>
        </form>
      </div>
    )
  };
};
function validate(values){
  const errors = {}
  if (!values.title){
    errors.title = "You must provide a title!";
  }
  return errors;
}
export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);