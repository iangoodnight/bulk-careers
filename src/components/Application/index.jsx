import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import { formGroup } from './application.module.scss';

const FormGroup = ({ children }) => {
  return (
    <div className={formGroup}>
      {children}
    </div>
  );
}

const Application = () => {
  return (
    <section>
      <h1>Application for employment</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          middleIntial: '',
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
      >
        <Form>
          <FormGroup>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="middleInitial">Middle Initial</label>
            <Field id="middleInitial" name="middleInitial" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="phone">Phone Number</label>
            <Field id="phone" name="phone" type="tel" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="streetAddress">Street Address</label>
            <Field id="streetAddress" name="streetAddress" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="city">City</label>
            <Field id="city" name="city" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="state">State</label>
            <Field as="select" id="state" name="state">
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </Field>
          </FormGroup>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </section>
  );
};

export default Application;
