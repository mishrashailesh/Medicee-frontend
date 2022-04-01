import { Formik } from "formik";
import { useState } from "react"; 
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import "./register.scss";
import React from "react";
import Axios from "axios";


interface MyProps {
  history: any;
}

export function Register(props: MyProps) {


  const [isCaptchaVerified, setisCaptchaVerified] = useState(
    process.env.NODE_ENV === "production" ? false : true
  );

  const { successToast, dangerToast } = useToast();

  const schema = yup.object({
    username: yup.string().required(),
    email: yup
      .string()
      .required("No email provided.")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid Email"),
    password: yup
      .string()
      .required("No password provided.")
      .min(4, "Password is too short - should be 8 chars minimum."),
    confirmPassword: yup
      .string()
      .required("No password provided.")
      .min(4, "Password is too short - should be 8 chars minimum.")
      .test(
        "confirm-password",
        "Confirm Password should be the same as Password",
        function (parent: any) {
          return parent?.password === parent?.confirmPassword;
        }
      ),
    acceptTerms: yup
      .boolean()
      .required("Please check")
      .oneOf([true], "You must accept the terms and conditions"),
    types: yup.string(),
  });

  const handleSubmit = (event: any) => {
    /** submit data to graphql  */
    const temp = { ...event, activated: false };
    delete temp.confirmPassword;


    return void Axios.post("/user", temp)
      .then((response: { status: number; data: { [x: string]: any; }; }) => {
        if (response.status === 201) {
          const token = response.data["access_token"];
          window.localStorage.setItem("token", token);
          setLogeedIn(true);
          sessionStorage.setItem("tour", "true");
          successToast("Successfully Registered!");
        }
      })
      .catch((e: any) => {
        console.log(e);
        dangerToast("SOmething went wrong please tray again later");
      });
  };

  

  return (
    <Container>
      <Card.Body>
        <Card.Title className="text-center mb-5 ">Author Register</Card.Title>
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
            types: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Row className="w-75 m-auto">
                <Col xs={12} md={6}>
                  <Form.Group controlId="username">
                    <Form.Control
                      type="text"
                      placeholder="Enter user name"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.username && !errors.username}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="formGridEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      // value={state.email}
                      // onChange={handleInputChange}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="w-75 m-auto">
                <Col xs={12} md={6}>
                  <Form.Group controlId="formGridPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      // value={state.password}
                      // onChange={handleInputChange}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.password && !errors.password}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="formGridPasswordConfirm">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      // value={state.confirmPassword}
                      // onChange={handleInputChange}
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={
                        touched.confirmPassword && !errors.confirmPassword
                      }
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="w-50 m-auto">
                <Col>
                  <Form.Group controlId="formGridType">
                    <Form.Control
                      onBlur={handleBlur}
                      name="types"
                      defaultValue="Please select"
                      value={values.types}
                      as="select"
                      onChange={handleChange}
                      placeholder="Select Type"
                      isValid={touched.types && !errors.types}
                      isInvalid={!!errors.types}
                    >
                      <option value="select">Please Select</option>
                      <option value="School">School</option>
                      <option value="Institute">Institute</option>
                      <option value="Organization">Organization</option>
                      <option value="Other">Other</option>
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.types}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="w-75 m-auto">
                <Col>
                  <Form.Group controlId="formGridCheck" className="text-center">
                    <Form.Check
                      type="checkbox"
                      name="acceptTerms"
                      id="acceptTerms"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="I agree to these terms and conditions"
                      isValid={touched.acceptTerms && !errors.acceptTerms}
                      isInvalid={!!errors.acceptTerms}
                    />
                    {(() => {
                      if (!!errors.acceptTerms) {
                        return (
                          <p className="errAcceptTerms">{errors.acceptTerms}</p>
                        );
                      } else if (touched.acceptTerms && !errors.acceptTerms) {
                        return <p className="looksGood">Looks good!</p>;
                      }
                      return;
                    })()}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group as={Row}>
                <Col sm={{ span: 12 }} className="text-center">
                  <Button
                    hidden={!isCaptchaVerified}
                    type="submit"
                    variant="outline-primary"
                    size="lg"
                    className="col-md-4 btn mr-2"
                    active
                  >
                    Register
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Container>
  );
}

export default Register;
function useToast(): { successToast: any; dangerToast: any; } {
    throw new Error("Function not implemented.");
}

function setLogeedIn(arg0: boolean) {
    throw new Error("Function not implemented.");
}

