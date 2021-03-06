import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard';
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'


class SurveyForm extends Component { 
  renderFields(){
   return _.map(formFields, ({ label, name}) => {
     return <Field component={SurveyField} type="text" label={label} name={name} key={name}/>
   })
   
  }
  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
        <button type="submit" className="teal btn-flat right white-text">Submit
        <i className="material-icons right">done</i></button>
        </form>
      </div>
    )
  };
};
function validate(values){
  const errors = {}

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, noValue })=>{
    if(!values[name]){
      errors[name] = noValue;
    }
  });
  
  return errors;
}
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);