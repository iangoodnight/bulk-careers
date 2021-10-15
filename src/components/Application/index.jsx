import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { formGroup } from './application.module.scss';

const rmsg = 'Oops!  This field is required!';

const ErrorSchema = Yup.object().shape({
  firstName: Yup.string().required(rmsg),
  lastName: Yup.string().required(rmsg),
  middleInitial: Yup.string(),
  email: Yup.string().email(),
  phone: Yup.string().required(rmsg),
  streetAddress: Yup.string().required(rmsg),
  city: Yup.string().required(rmsg),
  state: Yup.string().length(2).required(rmsg),
  zip: Yup.string().required(rmsg),
  birthdate: Yup.date().required(rmsg),
  social: Yup.string().length(4).required(rmsg),
  entitledToWork: Yup.boolean().required(rmsg),
  youngerThan18: Yup.boolean().required(rmsg),
  convictedFelon: Yup.boolean().required(rmsg),
  felonyExplanation: Yup.string(),
  probation: Yup.boolean().required(rmsg),
  probationEnd: Yup.date(),
  militaryService: Yup.boolean().required(rmsg),
  branch: Yup.string(),
  physicalLimitations: Yup.boolean().required(rmsg),
/*  position: '',
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
  reference3Phone: '' */
});

const FormGroup = ({ children }) => {
  return (
    <div className={formGroup}>
      {children}
    </div>
  );
};

const Application = ({ openJobs }) => {
  const stateAbbrs = [
    'OH', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL',
    'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
    'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
    'NJ', 'NM', 'NY', 'NC', 'ND', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT',  'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  return (
    <section>
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
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={ErrorSchema}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            <h2>Personal Information</h2>
            <FormGroup>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" />
              {
                touched.firstName &&
                errors.firstName &&
                <span>{errors.firstName}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" />
              {
                touched.lastName &&
                errors.lastName &&
                <span>{errors.lastName}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="middleInitial">Middle Initial</label>
              <Field id="middleInitial" name="middleInitial" />
              {
                touched.middleInitial &&
                errors.middleInitial &&
                <span>{errors.middleInitial}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" />
              {
                touched.email &&
                errors.email &&
                <span>{errors.email}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="phone">Phone Number</label>
              <Field id="phone" name="phone" type="tel" />
              {
                touched.phone &&
                errors.phone &&
                <span>{errors.phone}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="streetAddress">Street Address</label>
              <Field id="streetAddress" name="streetAddress" />
              {
                touched.streetAddress &&
                errors.streetAddress &&
                <span>{errors.streetAddress}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="city">City</label>
              <Field id="city" name="city" />
              {
                touched.city &&
                errors.city &&
                <span>{errors.city}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="state">State</label>
              <Field as="select" id="state" name="state">
                { stateAbbrs.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  )
                )}
              </Field>
              {
                touched.state &&
                errors.state &&
                <span>{errors.state}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="zip">Zip</label>
              <Field id="zip" name="zip" />
              {
                touched.zip &&
                errors.zip &&
                <span>{errors.zip}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="birthdate">Birthdate</label>
              <Field id="birthdate" name="birthdate" type="date" />
              {
                touched.birthdate &&
                errors.birthdate &&
                <span>{errors.birthdate}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="social">SSN (last 4 digits)</label>
              <Field id="social" name="social" />
              {
                touched.lastName &&
                errors.lastName &&
                <span>{errors.lastName}</span>
              }
            </FormGroup>

            <FormGroup>
              <h3 id="entitled-radio">
                Are you entitled to work in the U.S.?
              </h3>
              <div role="group" aria-labelledby="entitled-radio">
                <label>
                  <Field
                    checked={values.entitledToWork === true}
                    name="entitledToWork"
                    onChange={() => (
                      setFieldValue("entitledToWork", true)
                    )}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label>
                  <Field
                    checked={values.entitledToWork === false}
                    name="entitledToWork"
                    onChange={() => (
                      setFieldValue("entitledToWork", false)
                    )}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
              </div>
              {
                touched.entitledToWork &&
                errors.entitledToWork &&
                <span>{errors.entitledToWork}</span>
              }
            </FormGroup>

            <FormGroup>
              <h3 id="age-radio">Are you 17 or younger?</h3>
              <div role="group" aria-labelledby="age-radio">
                <label>
                  <Field
                    checked={values.youngerThan18 === true}
                    name="youngerThan18"
                    onChange={() => (
                      setFieldValue("youngerThan18", true)
                    )}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label>
                  <Field
                    checked={values.youngerThan18 === false}
                    name="youngerThan18"
                    onChange={() => (
                      setFieldValue("youngerThan18", false)
                    )}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
              </div>
              {
                touched.youngerThan18 &&
                errors.youngerThan18 &&
                <span>{errors.youngerThan18}</span>
              }
            </FormGroup>
            
            <FormGroup>
              <h3 id="convicted-radio">
                Have you been convicted of a felony or been incarcerated in
                connection with a felony in the past seven years?
              </h3>
              <div role="group" aria-labelledby="convicted-radio">
                <label>
                  <Field
                    checked={values.convictedFelon === true}
                    name="convictedFelon"
                    onChange={() => (
                      setFieldValue("convictedFelon", true)
                    )}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label>
                  <Field
                    checked={values.convictedFelon === false}
                    name="convictedFelon"
                    onChange={() => (
                      setFieldValue("convictedFelon", false)
                    )}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
              </div>
              {
                touched.convictedFelon &&
                errors.convictedFelon &&
                <span>{errors.convictedFelon}</span>
              }
              <label htmlFor="felonExplanation">If yes, please explain</label>
              <Field
                as="textarea"
                id="felonyExplanation"
                name="felonyExplanation"
              />
              {
                touched.felonyExplanation &&
                errors.felonyExplanation &&
                <span>{errors.felonyExplanation}</span>
              }
            </FormGroup>
             
            <FormGroup>
              <h3 id="probation-radio">
                Are you currently on probation?
              </h3>
              <div role="group" aria-labelledby="probation-radio">
                <label>
                  <Field
                    checked={values.probation === true}
                    name="probation"
                    onChange={() => (
                      setFieldValue("probation", true)
                    )}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label>
                  <Field
                    checked={values.probation === false}
                    name="probation"
                    onChange={() => (
                      setFieldValue("probation", false)
                    )}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
              </div>
              {
                touched.probation &&
                errors.probation &&
                <span>{errors.probation}</span>
              }
              <label htmlFor="probationEnd">
                If so, when will your probation be over?
              </label>
              <Field
                id="probationEnd"
                name="probationEnd"
                type="date"
              />
              {
                touched.probationEnd &&
                errors.probationEnd &&
                <span>{errors.probationEnd}</span>
              }
            </FormGroup>
             
            <FormGroup>
              <h3 id="military-radio">
                Military Service?
              </h3>
              <div role="group" aria-labelledby="military-radio">
                <label>
                  <Field
                    checked={values.militaryService === true}
                    name="militaryService"
                    onChange={() => (
                      setFieldValue("militaryService", true)
                    )}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label>
                  <Field
                    checked={values.militaryService === false}
                    name="militaryService"
                    onChange={() => (
                      setFieldValue("militaryService", false)
                    )}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
              </div>
              {
                touched.militaryService &&
                errors.militaryService &&
                <span>{errors.militaryService}</span>
              }
              <label htmlFor="branch">
                If so, which branch?
              </label>
              <Field id="branch" name="branch" />
              {
                touched.branch &&
                errors.branch &&
                <span>{errors.branch}</span>
              }
            </FormGroup>
             
            <FormGroup>
              <p id="physical">
                You may be required to lift 25-60 lbs repeatedly and work around
                perfumes and light fumes.  Do you have any physical limitations 
                or allergies that would prevent you from doing this job?
              </p>
              <div role="group" arialabelledby="physical">
                <label>
                  <Field
                    checked={values.physicalLimitations === true}
                    name="physicalLimitations"
                    onChange={() => (
                      setFieldValue("physicalLimitations", true)
                    )}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label>
                  <Field
                    checked={values.physicalLimitations === false}
                    name="physicalLimitations"
                    onChange={() => (
                      setFieldValue("physicalLimitations", false)
                    )}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
                {
                  touched.physicalLimitations &&
                  errors.physicalLimitations &&
                  <span>{errors.physicalLimitations}</span>
                }
              </div>
            </FormGroup>

            <FormGroup>
              <label htmlFor="position">
                Which position are you applying for?
              </label>
              <Field as="select" id="position" name="position">
                { openJobs.map(([id, job]) => (
                  <option key={id} value={job}>{job}</option>
                ))}
              </Field>
              {
                touched.position &&
                errors.position &&
                <span>{errors.position}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="referral">
                How did you hear about this position?
              </label>
              <Field id="referral" name="referral" />
              {
                touched.referral &&
                errors.referral &&
                <span>{errors.referral}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="expectedRate">
                Expected hourly/salary rate?
              </label>
              <Field id="expectedRate" name="expectedRate" />
              {
                touched.expectedRate &&
                errors.expectedRate &&
                <span>{errors.expectedRate}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="dateAvailable">Date Available?</label>
              <Field id="dateAvailable" name="dateAvailable" type="date"/>
              {
                touched.dateAvailable &&
                errors.dateAvailable &&
                <span>{errors.dateAvailable}</span>
              }
            </FormGroup>

            <FormGroup>
              <p id="currently">
                You may be required to lift 25-60 lbs repeatedly and work around
                perfumes and light fumes.  Do you have any physical limitations 
                or allergies that would prevent you from doing this job?
              </p>
              <div role="group" arialabelledby="currently">
                <label>
                  <Field
                    checked={values.currentlyEmployed === true}
                    name="currentlyEmployed"
                    onChange={() => (
                      setFieldValue("currentlyEmployed", true)
                    )}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label>
                  <Field
                    checked={values.currentlyEmployed === false}
                    name="currentlyEmployed"
                    onChange={() => (
                      setFieldValue("currentlyEmployed", false)
                    )}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
                {
                  touched.currentlyEmployed &&
                  errors.currentlyEmployed &&
                  <span>{errors.currentlyEmployed}</span>
                }
              </div>
            </FormGroup>

            <FormGroup>
              <p id="applied">
                Have you ever applied with this company before?
              </p>
              <div role="group" arialabelledby="applied">
                <label>
                  <Field
                    checked={values.everApplied === true}
                    name="everApplied"
                    onChange={() => (
                      setFieldValue("everApplied", true)
                    )}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label>
                  <Field
                    checked={values.everApplied === false}
                    name="everApplied"
                    onChange={() => (
                      setFieldValue("everApplied", false)
                    )}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
                {
                  touched.everApplied &&
                  errors.everApplied &&
                  <span>{errors.everApplied}</span>
                }
              </div>
            </FormGroup>

            <FormGroup>
              <p id="previous">
                Have you ever been employed by Natural Essentials Inc.?
              </p>
              <div role="group" arialabelledby="previous">
                <label>
                  <Field
                    checked={values.naturalEssentialsPreviously === true}
                    name="naturalEssentialsPreviously"
                    onChange={() => (
                      setFieldValue("naturalEssentialsPreviously", true)
                    )}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label>
                  <Field
                    checked={values.naturalEssentialsPreviously === false}
                    name="naturalEssentialsPreviously"
                    onChange={() => (
                      setFieldValue("naturalEssentialsPreviously", false)
                    )}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
                {
                  touched.naturalEssentialsPreviously &&
                  errors.naturalEssentialsPreviously &&
                  <span>{errors.naturalEssentialsPreviously}</span>
                }
              </div>
            </FormGroup>

            <h2>Prior work experience</h2>
            
            <FormGroup>
              <label htmlFor="employerWork1">
                Current or most recent employer (Enter "none" if this would be
                your first job)
              </label>
              <Field id="employerWork1" name="employerWork1" />
              {
                touched.employerWork1 &&
                errors.employerWork1 &&
                <span>{errors.employerWork1}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="streetWork1">Street address</label>
              <Field id="streetWork1" name="streetWork1" />
              {
                touched.streetWork1 &&
                errors.streetWork1 &&
                <span>{errors.streetWork1}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="cityWork1">City</label>
              <Field id="cityWork1" name="cityWork1" />
              {
                touched.cityWork1 &&
                errors.cityWork1 &&
                <span>{errors.cityWork1}</span>
              }
            </FormGroup>
          
            <FormGroup>
              <label htmlFor="stateWork1">State</label>
              <Field as="select" id="stateWork1" name="stateWork1">
                { stateAbbrs.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  )
                )}
              </Field>
              {
                touched.stateWork1 &&
                errors.stateWork1 &&
                <span>{errors.stateWork1}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="zipWork1">Zip</label>
              <Field id="zipWork1" name="zipWork1" />
              {
                touched.zipWork1 &&
                errors.zipWork1 &&
                <span>{errors.zipWork1}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="phoneWork1">Telephone</label>
              <Field id="phoneWork1" name="phoneWork1" type="tel" />
              {
                touched.phoneWork1 &&
                errors.phoneWork1 &&
                <span>{errors.phoneWork1}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="supervisorWork1">
                Name of an immediate supervisor
              </label>
              <Field id="supervisorWork1" name="supervisorWork1" />
              {
                touched.supervisorWork1 &&
                errors.supervisorWork1 &&
                <span>{errors.supervisorWork1}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="positionWork1">Position/Job title</label>
              <Field id="positionWork1" name="positionWork1" />
              {
                touched.positionWork1 &&
                errors.positionWork1 &&
                <span>{errors.positionWork1}</span>
              }
            </FormGroup>

            <h3>Dates of employment</h3>
            <FormGroup>
              <label htmlFor="startWork1">From</label>
              <Field id="startWork1" name="startWork1" type="date" />
              {
                touched.startWork1 &&
                errors.startWork1 &&
                <span>{errors.startWork1}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="endWork1">To</label>
              <Field id="endWork1" name="endWork1" type="date" />
              {
                touched.endWork1 &&
                errors.endWork1 &&
                <span>{errors.endWork1}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="employerWork2">
                Current or most recent employer (Enter "none" if this would be
                your first job)
              </label>
              <Field id="employerWork2" name="employerWork2" />
              {
                touched.employerWork2 &&
                errors.employerWork2 &&
                <span>{errors.employerWork2}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="streetWork2">Street address</label>
              <Field id="streetWork2" name="streetWork2" />
              {
                touched.streetWork2 &&
                errors.streetWork2 &&
                <span>{errors.streetWork2}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="cityWork2">City</label>
              <Field id="cityWork2" name="cityWork2" />
              {
                touched.cityWork2 &&
                errors.cityWork2 &&
                <span>{errors.cityWork2}</span>
              }
            </FormGroup>
          
            <FormGroup>
              <label htmlFor="stateWork2">State</label>
              <Field as="select" id="stateWork2" name="stateWork2">
                { stateAbbrs.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  )
                )}
              </Field>
              {
                touched.stateWork2 &&
                errors.stateWork2 &&
                <span>{errors.stateWork2}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="zipWork2">Zip</label>
              <Field id="zipWork2" name="zipWork2" />
              {
                touched.zipWork2 &&
                errors.zipWork2 &&
                <span>{errors.zipWork2}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="phoneWork2">Telephone</label>
              <Field id="phoneWork2" name="phoneWork2" type="tel" />
              {
                touched.phoneWork2 &&
                errors.phoneWork2 &&
                <span>{errors.phoneWork2}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="supervisorWork2">
                Name of an immediate supervisor
              </label>
              <Field id="supervisorWork2" name="supervisorWork2" />
              {
                touched.supervisorWork2 &&
                errors.supervisorWork2 &&
                <span>{errors.supervisorWork2}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="positionWork2">Position/Job title</label>
              <Field id="positionWork2" name="positionWork2" />
              {
                touched.positionWork2 &&
                errors.positionWork2 &&
                <span>{errors.positionWork2}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="employerWork3">
                Current or most recent employer (Enter "none" if this would be
                your first job)
              </label>
              <Field id="employerWork3" name="employerWork3" />
              {
                touched.employerWork3 &&
                errors.employerWork3 &&
                <span>{errors.employerWork3}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="streetWork3">Street address</label>
              <Field id="streetWork3" name="streetWork3" />
              {
                touched.streetWork3 &&
                errors.streetWork3 &&
                <span>{errors.streetWork3}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="cityWork3">City</label>
              <Field id="cityWork3" name="cityWork3" />
              {
                touched.cityWork3 &&
                errors.cityWork3 &&
                <span>{errors.cityWork3}</span>
              }
            </FormGroup>
          
            <FormGroup>
              <label htmlFor="stateWork3">State</label>
              <Field as="select" id="stateWork3" name="stateWork3">
                { stateAbbrs.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  )
                )}
              </Field>
              {
                touched.stateWork3 &&
                errors.stateWork3 &&
                <span>{errors.stateWork3}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="zipWork3">Zip</label>
              <Field id="zipWork3" name="zipWork3" />
              {
                touched.zipWork3 &&
                errors.zipWork3 &&
                <span>{errors.zipWork3}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="phoneWork3">Telephone</label>
              <Field id="phoneWork3" name="phoneWork3" type="tel" />
              {
                touched.phoneWork3 &&
                errors.phoneWork3 &&
                <span>{errors.phoneWork3}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="supervisorWork3">
                Name of an immediate supervisor
              </label>
              <Field id="supervisorWork3" name="supervisorWork3" />
              {
                touched.supervisorWork3 &&
                errors.supervisorWork3 &&
                <span>{errors.supervisorWork3}</span>
              }
            </FormGroup>

            <FormGroup>
              <label htmlFor="positionWork3">Position/Job title</label>
              <Field id="positionWork3" name="positionWork3" />
              {
                touched.positionWork3 &&
                errors.positionWork3 &&
                <span>{errors.positionWork3}</span>
              }
            </FormGroup>

            <h2>Education</h2>
            <h3>High School</h3>

            <FormGroup>
            </FormGroup>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Application;
