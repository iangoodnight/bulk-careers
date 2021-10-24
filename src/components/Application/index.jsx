import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Fieldset from '../Fieldset';
import Label from '../Label';
import Modal from '../Modal';
import ErrorSchema from '../../lib/errorSchema.js';
import {
  app,
  addressBlock,
  employer,
  formGroup,
  full,
  radio,
  textarea,
} from './application.module.scss';

const FormGroup = ({ children, isRadio = false, isTextArea = false }) => {
  return (
    <div
      className={`${formGroup} ${isRadio ? radio : ''} ${
        isTextArea ? textarea : ''
      }`}
    >
      {children}
    </div>
  );
};

const Application = ({ openJobs }) => {
  const [show, setShow] = useState(false);

  const [message, setMessage] = useState('Thank you for your application!');

  const endpoints = {
    post: '/.netlify/functions/postApplication',
  };

  // prettier-ignore
  const stateAbbrs = [
    '--',
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
  ];

  return (
    <main className={app}>
      <Modal handleClose={() => setShow(false)} show={show}>
        {message}
      </Modal>
      <h1>Application for Employment</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          middleInitial: '',
          email: '',
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
          birthdate: '',
          social: '',
          entitledToWork: '',
          youngerThan18: '',
          convictedFelon: '',
          felonyExplanation: '',
          probation: '',
          probationEnd: '',
          militaryService: '',
          branch: '',
          physicalLimitations: '',
          position: '',
          referral: '',
          expectedRate: '',
          dateAvailable: '',
          currentlyEmployed: '',
          everApplied: '',
          naturalEssentialsPreviously: '',
          employerWork1: '',
          streetWork1: '',
          cityWork1: '',
          stateWork1: '',
          zipWork1: '',
          phoneWork1: '',
          supervisorWork1: '',
          positionWork1: '',
          startWork1: '',
          endWork1: '',
          payWork1: '',
          reasonWork1: '',
          contactWork1: '',
          employerWork2: '',
          streetWork2: '',
          cityWork2: '',
          stateWork2: '',
          zipWork2: '',
          phoneWork2: '',
          supervisorWork2: '',
          positionWork2: '',
          startWork2: '',
          endWork2: '',
          payWork2: '',
          reasonWork2: '',
          contactWork2: '',
          employerWork3: '',
          streetWork3: '',
          cityWork3: '',
          stateWork3: '',
          zipWork3: '',
          phoneWork3: '',
          supervisorWork3: '',
          positionWork3: '',
          startWork3: '',
          endWork3: '',
          payWork3: '',
          reasonWork3: '',
          contactWork3: '',
          highSchool: '',
          highSchoolYrCompleted: '',
          highSchoolDegree: '',
          highSchoolMajor: '',
          college: '',
          collegeYrCompleted: '',
          collegeDegree: '',
          collegeMajor: '',
          tradeSchool: '',
          tradeSchoolYrCompleted: '',
          tradeSchoolDegree: '',
          tradeSchoolMajor: '',
          other: '',
          otherYrCompleted: '',
          otherDegree: '',
          otherMajor: '',
          specialSkills: '',
          reference1: '',
          reference1Phone: '',
          reference2: '',
          reference2Phone: '',
          reference3: '',
          reference3Phone: '',
        }}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          const response = await fetch(endpoints.post, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });

          const { status } = response;
          const data = await response.json();

          if (status === 200) {
            setMessage('Thank you for your application!');
            setShow(true);
            setSubmitting(false);
            resetForm();
          } else {
            setMessage('Something went wrong: ' + data.msg);
            setShow(true);
          }
        }}
        validationSchema={ErrorSchema}
      >
        {({ errors, isSubmitting, touched, setFieldValue, values }) => (
          <Form>
            <h2>Personal Information</h2>
            <Fieldset legend="Name">
              <FormGroup>
                <Field id="firstName" name="firstName" />
                <Label htmlFor="firstName" touched={touched} errors={errors}>
                  First
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="middleInitial" name="middleInitial" />
                <Label
                  htmlFor="middleInitial"
                  touched={touched}
                  errors={errors}
                >
                  MI
                </Label>
              </FormGroup>
              <FormGroup>
                <Field id="lastName" name="lastName" />
                <Label htmlFor="lastName" touched={touched} errors={errors}>
                  Last
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Contact">
              <FormGroup>
                <Field id="email" name="email" type="email" />
                <Label htmlFor="email" errors={errors} touched={touched}>
                  Email
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="phone" name="phone" type="tel" />
                <Label htmlFor="phone" errors={errors} touched={touched}>
                  Phone Number
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset className={addressBlock} legend="Address">
              <FormGroup>
                <Field id="streetAddress" name="streetAddress" />
                <Label
                  htmlFor="streetAddress"
                  errors={errors}
                  touched={touched}
                >
                  Street
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="city" name="city" />
                <Label htmlFor="city" errors={errors} touched={touched}>
                  City
                </Label>
              </FormGroup>

              <FormGroup>
                <Field as="select" id="state" name="state">
                  {stateAbbrs.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Field>
                <Label htmlFor="state" errors={errors} touched={touched}>
                  State
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="zip" name="zip" />
                <Label htmlFor="zip" errors={errors} touched={touched}>
                  Zip
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Birthdate and Social">
              <FormGroup>
                <Field id="birthdate" name="birthdate" type="date" />
                <Label htmlFor="birthdate" errors={errors} touched={touched}>
                  Birthdate
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="social" name="social" />
                <Label htmlFor="social" errors={errors} touched={touched}>
                  SSN (last 4 digits)
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Background">
              <FormGroup isRadio={true}>
                <h3 id="entitled-radio">
                  Are you entitled to work in the U.S.?
                </h3>
                <div role="group" aria-labelledby="entitled-radio">
                  <label htmlFor="entitled-true">
                    <Field
                      checked={values.entitledToWork === true}
                      id="entitled-true"
                      name="entitledToWork"
                      onChange={() => setFieldValue('entitledToWork', true)}
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="entitled-false">
                    <Field
                      checked={values.entitledToWork === false}
                      id="entitled-false"
                      name="entitledToWork"
                      onChange={() => setFieldValue('entitledToWork', false)}
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.entitledToWork && errors.entitledToWork && (
                    <span>{errors.entitledToWork}</span>
                  )}
                </div>
              </FormGroup>

              <FormGroup isRadio={true}>
                <h3 id="age-radio">Are you 17 or younger?</h3>
                <div role="group" aria-labelledby="age-radio">
                  <label htmlFor="younger-true">
                    <Field
                      checked={values.youngerThan18 === true}
                      id="younger-true"
                      name="youngerThan18"
                      onChange={() => setFieldValue('youngerThan18', true)}
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="younger-false">
                    <Field
                      checked={values.youngerThan18 === false}
                      id="younger-false"
                      name="youngerThan18"
                      onChange={() => setFieldValue('youngerThan18', false)}
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.youngerThan18 && errors.youngerThan18 && (
                    <span>{errors.youngerThan18}</span>
                  )}
                </div>
              </FormGroup>

              <FormGroup isRadio={true}>
                <h3 id="convicted-radio">
                  Have you been convicted of a felony or been incarcerated in
                  connection with a felony in the past seven years?
                </h3>
                <div role="group" aria-labelledby="convicted-radio">
                  <label htmlFor="convicted-true">
                    <Field
                      checked={values.convictedFelon === true}
                      id="convicted-true"
                      name="convictedFelon"
                      onChange={() => setFieldValue('convictedFelon', true)}
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="convicted-false">
                    <Field
                      checked={values.convictedFelon === false}
                      id="convicted-false"
                      name="convictedFelon"
                      onChange={() => setFieldValue('convictedFelon', false)}
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.convictedFelon && errors.convictedFelon && (
                    <span>{errors.convictedFelon}</span>
                  )}
                </div>
              </FormGroup>

              <FormGroup isTextArea={true}>
                <Label
                  htmlFor="felonExplanation"
                  errors={errors}
                  touched={touched}
                >
                  If yes, please explain
                </Label>
                <Field
                  as="textarea"
                  id="felonyExplanation"
                  name="felonyExplanation"
                />
              </FormGroup>

              <FormGroup isRadio={true}>
                <h3 id="probation-radio">Are you currently on probation?</h3>
                <div role="group" aria-labelledby="probation-radio">
                  <label htmlFor="probation-true">
                    <Field
                      checked={values.probation === true}
                      id="probation-true"
                      name="probation"
                      onChange={() => setFieldValue('probation', true)}
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="probation-false">
                    <Field
                      checked={values.probation === false}
                      id="probation-false"
                      name="probation"
                      onChange={() => setFieldValue('probation', false)}
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.probation && errors.probation && (
                    <span>{errors.probation}</span>
                  )}
                </div>
              </FormGroup>

              <FormGroup>
                <h3>If so, when will your probation be over?</h3>
                <Field id="probationEnd" name="probationEnd" type="date" />
                <Label htmlFor="probationEnd" errors={errors} touched={touched}>
                  Date
                </Label>
              </FormGroup>

              <FormGroup isRadio={true}>
                <h3 id="military-radio">Military Service?</h3>
                <div role="group" aria-labelledby="military-radio">
                  <label htmlFor="military-true">
                    <Field
                      checked={values.militaryService === true}
                      id="military-true"
                      name="militaryService"
                      onChange={() => setFieldValue('militaryService', true)}
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="military-false">
                    <Field
                      checked={values.militaryService === false}
                      id="military-false"
                      name="militaryService"
                      onChange={() => setFieldValue('militaryService', false)}
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.militaryService && errors.militaryService && (
                    <span>{errors.militaryService}</span>
                  )}
                </div>
              </FormGroup>

              <FormGroup>
                <h3>If so, which branch?</h3>
                <Field id="branch" name="branch" />
                <Label htmlFor="branch" errors={errors} touched={touched}>
                  Branch
                </Label>
              </FormGroup>

              <FormGroup isRadio={true}>
                <h3 id="physical">
                  You may be required to lift 25-60 lbs repeatedly and work
                  around perfumes and light fumes. Do you have any physical
                  limitations or allergies that would prevent you from doing
                  this job?
                </h3>
                <div role="group" aria-labelledby="physical">
                  <label htmlFor="physical-true">
                    <Field
                      checked={values.physicalLimitations === true}
                      id="physical-true"
                      name="physicalLimitations"
                      onChange={() =>
                        setFieldValue('physicalLimitations', true)
                      }
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="physical-false">
                    <Field
                      checked={values.physicalLimitations === false}
                      id="physical-false"
                      name="physicalLimitations"
                      onChange={() =>
                        setFieldValue('physicalLimitations', false)
                      }
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.physicalLimitations &&
                    errors.physicalLimitations && (
                      <span>{errors.physicalLimitations}</span>
                    )}
                </div>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Employment">
              <FormGroup>
                <Label htmlFor="position" errors={errors} touched={touched}>
                  Which position are you applying for?
                </Label>
                <Field as="select" id="position" name="position">
                  {openJobs.map(([id, job]) => (
                    <option key={id} value={job}>
                      {job}
                    </option>
                  ))}
                </Field>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="referral" errors={errors} touched={touched}>
                  How did you hear about this position?
                </Label>
                <Field id="referral" name="referral" />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="expectedRate" errors={errors} touched={touched}>
                  Expected hourly/salary rate?
                </Label>
                <Field id="expectedRate" name="expectedRate" />
              </FormGroup>

              <FormGroup>
                <Label
                  htmlFor="dateAvailable"
                  errors={errors}
                  touched={touched}
                >
                  Date Available?
                </Label>
                <Field id="dateAvailable" name="dateAvailable" type="date" />
              </FormGroup>

              <FormGroup isRadio={true}>
                <h3 id="currently">Are you currently employed?</h3>
                <div role="group" aria-labelledby="currently">
                  <label htmlFor="currently-true">
                    <Field
                      checked={values.currentlyEmployed === true}
                      id="currently-true"
                      name="currentlyEmployed"
                      onChange={() => setFieldValue('currentlyEmployed', true)}
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="currently-false">
                    <Field
                      checked={values.currentlyEmployed === false}
                      id="currently-false"
                      name="currentlyEmployed"
                      onChange={() => setFieldValue('currentlyEmployed', false)}
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.currentlyEmployed && errors.currentlyEmployed && (
                    <span>{errors.currentlyEmployed}</span>
                  )}
                </div>
              </FormGroup>

              <FormGroup isRadio={true}>
                <h3 id="applied">
                  Have you ever applied with this company before?
                </h3>
                <div role="group" aria-labelledby="applied">
                  <label htmlFor="ever-true">
                    <Field
                      checked={values.everApplied === true}
                      id="ever-true"
                      name="everApplied"
                      onChange={() => setFieldValue('everApplied', true)}
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="ever-false">
                    <Field
                      checked={values.everApplied === false}
                      id="ever-false"
                      name="everApplied"
                      onChange={() => setFieldValue('everApplied', false)}
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.everApplied && errors.everApplied && (
                    <span>{errors.everApplied}</span>
                  )}
                </div>
              </FormGroup>

              <FormGroup isRadio={true}>
                <h3 id="previous">
                  Have you ever been employed by Natural Essentials Inc.?
                </h3>
                <div role="group" aria-labelledby="previous">
                  <label htmlFor="previous-true">
                    <Field
                      checked={values.naturalEssentialsPreviously === true}
                      id="previous-true"
                      name="naturalEssentialsPreviously"
                      onChange={() =>
                        setFieldValue('naturalEssentialsPreviously', true)
                      }
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="previous-false">
                    <Field
                      checked={values.naturalEssentialsPreviously === false}
                      id="previous-false"
                      name="naturalEssentialsPreviously"
                      onChange={() =>
                        setFieldValue('naturalEssentialsPreviously', false)
                      }
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.naturalEssentialsPreviously &&
                    errors.naturalEssentialsPreviously && (
                      <span>{errors.naturalEssentialsPreviously}</span>
                    )}
                </div>
              </FormGroup>
            </Fieldset>

            <h2>Prior work experience</h2>

            <h3 className={employer}>Employer 1</h3>
            <Fieldset legend="Current (or most recent)">
              <FormGroup>
                <Field id="employerWork1" name="employerWork1" />
                <Label
                  htmlFor="employerWork1"
                  errors={errors}
                  touched={touched}
                >
                  Employer (Enter "none" if this would be your first job)
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="phoneWork1" name="phoneWork1" type="tel" />
                <Label htmlFor="phoneWork1" errors={errors} touched={touched}>
                  Telephone
                </Label>
              </FormGroup>

              <h3 className={full} id="contact1">
                May we contact?
              </h3>
              <FormGroup isRadio={true}>
                <div role="group" aria-labelledby="contact1">
                  <label htmlFor="contact1-true">
                    <Field
                      checked={values.contactWork1 === true}
                      id="contact1-true"
                      name="contactWork1"
                      onChange={() => setFieldValue('contactWork1', true)}
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="contact1-false">
                    <Field
                      checked={values.contactWork1 === false}
                      id="contact1-false"
                      name="contactWork1"
                      onChange={() => setFieldValue('contactWork1', false)}
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.contactWork1 && errors.contactWork1 && (
                    <span>{errors.contactWork1}</span>
                  )}
                </div>
              </FormGroup>
            </Fieldset>

            <Fieldset className={addressBlock} legend="Address">
              <FormGroup>
                <Field id="streetWork1" name="streetWork1" />
                <Label htmlFor="streetWork1" errors={errors} touched={touched}>
                  Street
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="cityWork1" name="cityWork1" />
                <Label htmlFor="cityWork1" errors={errors} touched={touched}>
                  City
                </Label>
              </FormGroup>

              <FormGroup>
                <Field as="select" id="stateWork1" name="stateWork1">
                  {stateAbbrs.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Field>
                <Label htmlFor="stateWork1" errors={errors} touched={touched}>
                  State
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="zipWork1" name="zipWork1" />
                <Label htmlFor="zipWork1" errors={errors} touched={touched}>
                  Zip
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Position held">
              <FormGroup>
                <Field id="positionWork1" name="positionWork1" />
                <Label
                  htmlFor="positionWork1"
                  errors={errors}
                  touched={touched}
                >
                  Job title
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="payWork1" name="payWork1" />
                <Label htmlFor="payWork1" errors={errors} touched={touched}>
                  Pay rate
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Immediate supervisor">
              <FormGroup>
                <Field id="supervisorWork1" name="supervisorWork1" />
                <Label
                  htmlFor="supervisorWork1"
                  errors={errors}
                  touched={touched}
                >
                  Name
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Dates of employment">
              <FormGroup>
                <Field id="startWork1" name="startWork1" type="date" />
                <Label htmlFor="startWork1" errors={errors} touched={touched}>
                  From
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="endWork1" name="endWork1" type="date" />
                <Label htmlFor="endWork1" errors={errors} touched={touched}>
                  To
                </Label>
              </FormGroup>
            </Fieldset>

            <h3 className={employer}>Employer 2</h3>
            <Fieldset legend="Previous employer">
              <FormGroup>
                <Field id="employerWork2" name="employerWork2" />
                <Label
                  htmlFor="employerWork2"
                  errors={errors}
                  touched={touched}
                >
                  Employer
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="phoneWork2" name="phoneWork2" type="tel" />
                <Label htmlFor="phoneWork2" errors={errors} touched={touched}>
                  Telephone
                </Label>
              </FormGroup>

              <h3 className={full} id="contact2">
                May we contact?
              </h3>
              <FormGroup isRadio={true}>
                <div role="group" aria-labelledby="contact2">
                  <label htmlFor="contact2-true">
                    <Field
                      checked={values.contactWork2 === true}
                      id="contact2-true"
                      name="contactWork2"
                      onChange={() => setFieldValue('contactWork2', true)}
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="contact2-false">
                    <Field
                      checked={values.contactWork2 === false}
                      id="contact2-false"
                      name="contactWork2"
                      onChange={() => setFieldValue('contactWork2', false)}
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.contactWork2 && errors.contactWork2 && (
                    <span>{errors.contactWork2}</span>
                  )}
                </div>
              </FormGroup>
            </Fieldset>

            <Fieldset className={addressBlock} legend="Address">
              <FormGroup>
                <Field id="streetWork2" name="streetWork2" />
                <Label htmlFor="streetWork2" errors={errors} touched={touched}>
                  Street
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="cityWork2" name="cityWork2" />
                <Label htmlFor="cityWork2" errors={errors} touched={touched}>
                  City
                </Label>
              </FormGroup>

              <FormGroup>
                <Field as="select" id="stateWork2" name="stateWork2">
                  {stateAbbrs.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Field>
                <Label htmlFor="stateWork2" errors={errors} touched={touched}>
                  State
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="zipWork2" name="zipWork2" />
                <Label htmlFor="zipWork2" errors={errors} touched={touched}>
                  Zip
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Position held">
              <FormGroup>
                <Field id="positionWork2" name="positionWork2" />
                <Label
                  htmlFor="positionWork2"
                  errors={errors}
                  touched={touched}
                >
                  Job title
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="payWork2" name="payWork2" />
                <Label htmlFor="payWork2" errors={errors} touched={touched}>
                  Pay rate
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Immediate supervisor">
              <FormGroup>
                <Field id="supervisorWork2" name="supervisorWork2" />
                <Label
                  htmlFor="supervisorWork2"
                  errors={errors}
                  touched={touched}
                >
                  Name
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Dates of employment">
              <FormGroup>
                <Field id="startWork2" name="startWork2" type="date" />
                <Label htmlFor="startWork2" errors={errors} touched={touched}>
                  From
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="endWork2" name="endWork2" type="date" />
                <Label htmlFor="endWork2" errors={errors} touched={touched}>
                  To
                </Label>
              </FormGroup>
            </Fieldset>

            <h3 className={employer}>Employer 3</h3>
            <Fieldset legend="Previous employer">
              <FormGroup>
                <Field id="employerWork3" name="employerWork3" />
                <Label
                  htmlFor="employerWork3"
                  errors={errors}
                  touched={touched}
                >
                  Employer
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="phoneWork3" name="phoneWork3" type="tel" />
                <Label htmlFor="phoneWork3" errors={errors} touched={touched}>
                  Telephone
                </Label>
              </FormGroup>

              <h3 className={full} id="contact3">
                May we contact?
              </h3>
              <FormGroup isRadio={true}>
                <div role="group" aria-labelledby="contact3">
                  <label htmlFor="contact3-true">
                    <Field
                      checked={values.contactWork3 === true}
                      id="contact3-true"
                      name="contactWork3"
                      onChange={() => setFieldValue('contactWork3', true)}
                      type="radio"
                      value={true}
                    />
                    Yes
                  </label>
                  <label htmlFor="contact3-false">
                    <Field
                      checked={values.contactWork3 === false}
                      id="contact3-false"
                      name="contactWork3"
                      onChange={() => setFieldValue('contactWork3', false)}
                      type="radio"
                      value={false}
                    />
                    No
                  </label>
                  {touched.contactWork3 && errors.contactWork3 && (
                    <span>{errors.contactWork3}</span>
                  )}
                </div>
              </FormGroup>
            </Fieldset>

            <Fieldset className={addressBlock} legend="Address">
              <FormGroup>
                <Field id="streetWork3" name="streetWork3" />
                <Label htmlFor="streetWork3" errors={errors} touched={touched}>
                  Street
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="cityWork3" name="cityWork3" />
                <Label htmlFor="cityWork3" errors={errors} touched={touched}>
                  City
                </Label>
              </FormGroup>

              <FormGroup>
                <Field as="select" id="stateWork3" name="stateWork3">
                  {stateAbbrs.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Field>
                <Label htmlFor="stateWork3" errors={errors} touched={touched}>
                  State
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="zipWork3" name="zipWork3" />
                <Label htmlFor="zipWork3" errors={errors} touched={touched}>
                  Zip
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Position held">
              <FormGroup>
                <Field id="positionWork3" name="positionWork3" />
                <Label
                  htmlFor="positionWork3"
                  errors={errors}
                  touched={touched}
                >
                  Job title
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="payWork3" name="payWork3" />
                <Label htmlFor="payWork3" errors={errors} touched={touched}>
                  Pay rate
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Immediate supervisor">
              <FormGroup>
                <Field id="supervisorWork3" name="supervisorWork3" />
                <Label
                  htmlFor="supervisorWork3"
                  errors={errors}
                  touched={touched}
                >
                  Name
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Dates of employment">
              <FormGroup>
                <Field id="startWork3" name="startWork3" type="date" />
                <Label htmlFor="startWork3" errors={errors} touched={touched}>
                  From
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="endWork3" name="endWork3" type="date" />
                <Label htmlFor="endWork3" errors={errors} touched={touched}>
                  To
                </Label>
              </FormGroup>
            </Fieldset>

            <h2>Education</h2>

            <Fieldset legend="High school">
              <FormGroup>
                <Field id="highSchool" name="highSchool" />
                <Label htmlFor="highSchool" errors={errors} touched={touched}>
                  Name/Location
                </Label>
              </FormGroup>

              <FormGroup>
                <Field
                  id="highSchoolYrCompleted"
                  name="highSchoolYrCompleted"
                />
                <Label
                  htmlFor="highSchoolYrCompleted"
                  errors={errors}
                  touched={touched}
                >
                  Year completed
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="highSchoolDegree" name="highSchoolDegree" />
                <Label
                  htmlFor="highSchoolDegree"
                  errors={errors}
                  touched={touched}
                >
                  Degree
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="highSchoolMajor" name="highSchoolMajor" />
                <Label
                  htmlFor="highSchoolMajor"
                  errors={errors}
                  touched={touched}
                >
                  Major or emphasis
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="College or university">
              <FormGroup>
                <Field id="college" name="college" />
                <Label htmlFor="college" errors={errors} touched={touched}>
                  Name/Location
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="collegeYrCompleted" name="collegeYrCompleted" />
                <Label
                  htmlFor="collegeYrCompleted"
                  errors={errors}
                  touched={touched}
                >
                  Year completed
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="collegeDegree" name="collegeDegree" />
                <Label
                  htmlFor="collegeDegree"
                  errors={errors}
                  touched={touched}
                >
                  Degree
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="collegeMajor" name="collegeMajor" />
                <Label htmlFor="collegeMajor" errors={errors} touched={touched}>
                  Major or emphasis
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Trade school">
              <FormGroup>
                <Field id="tradeSchool" name="tradeSchool" />
                <Label htmlFor="tradeSchool" errors={errors} touched={touched}>
                  Name/Location
                </Label>
              </FormGroup>

              <FormGroup>
                <Field
                  id="tradeSchoolYrCompleted"
                  name="tradeSchoolYrCompleted"
                />
                <Label
                  htmlFor="tradeSchoolYrCompleted"
                  errors={errors}
                  touched={touched}
                >
                  Year completed
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="tradeSchoolDegree" name="tradeSchoolDegree" />
                <Label
                  htmlFor="tradeSchoolDegree"
                  errors={errors}
                  touched={touched}
                >
                  Degree
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="tradeSchoolMajor" name="tradeSchoolMajor" />
                <Label
                  htmlFor="tradeSchoolMajor"
                  errors={errors}
                  touched={touched}
                >
                  Major or emphasis
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Other">
              <FormGroup>
                <Field id="other" name="other" />
                <Label htmlFor="other" errors={errors} touched={touched}>
                  Name/Location
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="otherYrCompleted" name="otherYrCompleted" />
                <Label
                  htmlFor="otherYrCompleted"
                  errors={errors}
                  touched={touched}
                >
                  Year completed
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="otherDegree" name="otherDegree" />
                <Label htmlFor="otherDegree" errors={errors} touched={touched}>
                  Degree
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="otherMajor" name="otherMajor" />
                <Label htmlFor="otherMajor" errors={errors} touched={touched}>
                  Major or emphasis
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Additional skills">
              <FormGroup className={textarea} isTextArea={true}>
                <Label
                  htmlFor="specialSkills"
                  errors={errors}
                  touched={touched}
                >
                  List any applicable special skills, training or proficiencies.
                </Label>
                <Field as="textarea" id="specialSkills" name="specialSkills" />
              </FormGroup>
            </Fieldset>

            <h2>Personal References</h2>

            <Fieldset legend="Reference 1">
              <FormGroup>
                <Field id="reference1" name="reference1" />
                <Label htmlFor="reference1" errors={errors} touched={touched}>
                  Name
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="reference1Phone" name="reference1Phone" type="tel" />
                <Label
                  htmlFor="reference1Phone"
                  errors={errors}
                  touched={touched}
                >
                  Phone
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Reference 2">
              <FormGroup>
                <Field id="reference2" name="reference2" />
                <Label htmlFor="reference2" errors={errors} touched={touched}>
                  Name
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="reference2Phone" name="reference2Phone" type="tel" />
                <Label
                  htmlFor="reference2Phone"
                  errors={errors}
                  touched={touched}
                >
                  Phone
                </Label>
              </FormGroup>
            </Fieldset>

            <Fieldset legend="Reference 3">
              <FormGroup>
                <Field id="reference3" name="reference3" />
                <Label htmlFor="reference3" errors={errors} touched={touched}>
                  Name
                </Label>
              </FormGroup>

              <FormGroup>
                <Field id="reference3Phone" name="reference3Phone" type="tel" />
                <Label
                  htmlFor="reference3Phone"
                  errors={errors}
                  touched={touched}
                >
                  Phone
                </Label>
              </FormGroup>
            </Fieldset>

            <p>
              Disclaimer - By submitting this form, I hereby certify that the
              above information, to the best of my knowledge, is correct. I
              understand that falsification of this information may prevent me
              from being hired or lead to my dismissal if hired. I also provide
              consent for former employers to be contacted regarding work
              records.
            </p>

            <button
              disabled={isSubmitting}
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Application;
