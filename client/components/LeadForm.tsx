import React from 'react';
import { Form, Field } from 'react-final-form';
import { ILead } from '../pages/leads';

export interface LeadFormProps {
  title: string;
  onSubmit: (formValues: ILead) => void;
  handleDelete?: () => void;
  defaultValues?: ILead;
}

const LeadForm = (props: LeadFormProps) => {
  return (
    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
        <form className="ui form" onSubmit={handleSubmit}>
          <h2 className="ui dividing header">{props.title}</h2>
          <div>
            <div className="field">
              <div className="two fields">
                <div className="four wide field">
                  <Field
                    name="firstName"
                    initialValue={props?.defaultValues?.firstName}
                  >
                    {({ input }) => (
                      <div>
                        <label>First Name</label>
                        <input type="text" {...input} />
                      </div>
                    )}
                  </Field>
                </div>
                <div className="four wide field">
                  <Field
                    name="lastName"
                    initialValue={props?.defaultValues?.lastName}
                  >
                    {({ input }) => (
                      <div>
                        <label>Last Name</label>
                        <input type="text" {...input} />
                      </div>
                    )}
                  </Field>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="eight wide field">
                <Field
                  name="address"
                  initialValue={props?.defaultValues?.address}
                >
                  {({ input }) => (
                    <div>
                      <label>Address</label>
                      <input type="text" {...input} />
                    </div>
                  )}
                </Field>
              </div>
            </div>
            <div className="field">
              <div className="two fields">
                <div className="four wide field">
                  <Field
                    name="email"
                    initialValue={props?.defaultValues?.email}
                  >
                    {({ input }) => (
                      <div>
                        <label>Email</label>
                        <input type="email" {...input} />
                      </div>
                    )}
                  </Field>
                </div>
                <div className="four wide field">
                  <Field
                    name="contactNo"
                    initialValue={props?.defaultValues?.contactNo}
                  >
                    {({ input }) => (
                      <div>
                        <label>Contact Number</label>
                        <input type="text" {...input} />
                      </div>
                    )}
                  </Field>
                </div>
              </div>
            </div>

            <button type="submit" className="ui button primary">
              Submit
            </button>
            {props.defaultValues && (
              <button
                type="button"
                className="ui button red"
                onClick={props.handleDelete}
              >
                Delete
              </button>
            )}
          </div>
        </form>
      )}
    />
  );
};

export default LeadForm;
