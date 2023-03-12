import { Formik, Field, FormikProps, Form } from "formik";
import Button from "../Button/Button";

import styles from "./Form.module.scss";

import { FormType } from "../../utils/Types";

import axios from "axios";
import { useState } from "react";

const validateEmail = (value: string) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validateText = (value: string) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

const ContactForm = () => {
  const [sending, setSending] = useState<boolean>(false);
  const [receivedResponse, setReceivedResponse] = useState<boolean>(false);
  const [sentSuccess, setSentSuccess] = useState<boolean>(false);
  const initialValues: FormType = {
    firstName: "",
    lastName: "",
    reference: "",
    email: "",
    mobile: "",
    address: "",
    truck: "Beaver tail",
    financing: "no-financing",
  };
  const sendEmail = async (values: FormType) => {
    const res = await axios.post("/api/email", {
      body: {
        form: values,
      },
    });
    setSending(false);
    setReceivedResponse(true);
    if (res.status === 200) {
      setSentSuccess(true);
    } else {
      setSentSuccess(false);
    }
    console.log(res);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        console.log(values, actions);
        setSending(true);
        sendEmail(values);
      }}
    >
      {(props: FormikProps<any>) => (
        <Form className={styles.form}>
          <div className={styles.formSection}>
            <h3>Personal information</h3>
            <div className={styles.inputs}>
              <div className={`${styles.inputContainer} ${styles.oneCol}`}>
                <label>First name</label>
                <Field type="text" name="firstName" validate={validateText} />
                {props.errors.firstName && props.touched.firstName && (
                  <p>{`${props.errors.firstName}`}</p>
                )}
              </div>
              <div className={`${styles.inputContainer} ${styles.oneCol}`}>
                <label>Last name</label>
                <Field type="text" name="lastName" validate={validateText} />
                {props.errors.lastName && props.touched.lastName && (
                  <p>{`${props.errors.lastName}`}</p>
                )}
              </div>
              <div className={`${styles.inputContainer} ${styles.twoCol}`}>
                <label>Reference</label>
                <Field type="text" name="reference" />
              </div>
            </div>
          </div>
          <div className={styles.formSection}>
            <h3>Contact information</h3>
            <div className={styles.inputs}>
              <div className={`${styles.inputContainer} ${styles.oneCol}`}>
                <label>E-mail</label>
                <Field type="text" name="email" validate={validateEmail} />
                {props.errors.email && props.touched.email && (
                  <p>{`${props.errors.email}`}</p>
                )}
              </div>
              <div className={`${styles.inputContainer} ${styles.oneCol}`}>
                <label>Mobile</label>
                <Field type="text" name="mobile" validate={validateText} />
                {props.errors.mobile && props.touched.mobile && (
                  <p>{`${props.errors.mobile}`}</p>
                )}
              </div>
              <div className={`${styles.inputContainer} ${styles.twoCol}`}>
                <label>Address</label>
                <Field type="text" name="address" validate={validateText} />
                {props.errors.address && props.touched.address && (
                  <p>{`${props.errors.address}`}</p>
                )}
              </div>
            </div>
          </div>
          <div className={styles.formSection}>
            <h3>Enquiry information</h3>
            <div className={styles.inputs}>
              <div className={`${styles.inputContainer} ${styles.oneCol}`}>
                <label>Truck</label>
                <Field as="select" name="truck" validate={validateText}>
                  <option value="beaver-tail">Beaver tail</option>
                  <option value="twin-deck">Twin deck</option>
                  <option value="flat-bed">Flat bed</option>
                  <option value="tilt-and-slide">Tilt & slide</option>
                </Field>
                {props.errors.truck && props.touched.truck && (
                  <p>{`${props.errors.truck}`}</p>
                )}
              </div>
              <div className={`${styles.inputContainer} ${styles.oneCol}`}>
                <label>Financing</label>
                <Field as="select" name="financing" validate={validateText}>
                  <option value="financing">Financing</option>
                  <option value="no-financing">No financing</option>
                </Field>
                {props.errors.financing && props.touched.financing && (
                  <p>{`${props.errors.financing}`}</p>
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.notice}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34.862"
              height="34.861"
              viewBox="0 0 34.862 34.861"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M17.431,34.862A17.431,17.431,0,1,0,0,17.431,17.431,17.431,0,0,0,17.431,34.862ZM14.707,22.878h1.634V18.52H14.707a1.634,1.634,0,1,1,0-3.268h3.268a1.63,1.63,0,0,1,1.634,1.634v5.992h.545a1.634,1.634,0,1,1,0,3.268H14.707a1.634,1.634,0,1,1,0-3.268ZM17.431,8.715a2.179,2.179,0,1,1-2.179,2.179A2.179,2.179,0,0,1,17.431,8.715Z"
              />
            </svg>
            <p>
              The information you provide will not be stored on any of our
              severs. It will only be used to send us an email so that we will
              be able to get into contact with you.
            </p>
          </div>
          {sending ? (
            <div className={styles.sending}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" />
              </svg>
              <p>sending...</p>
            </div>
          ) : receivedResponse ? (
            sentSuccess ? (
              <p className={styles.infoText}>Successfully sent.</p>
            ) : (
              <p className={styles.infoText}>There was an issue. Try again</p>
            )
          ) : (
            <Button
              background={true}
              action={() => {
                props.submitForm();
              }}
            >
              Send enquiry
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
