import { async } from "@firebase/util";
import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../formInput/formInput.component";
import Info from "../Info/Info.component";
import "./Register.styles.scss";
export default function Register() {
  const defaultFormFields = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords doesn't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {
        firstName,
        lastName,
      });

      setFormFields(defaultFormFields);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user , This email is already in use");
      } else {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <div className="login-wrapper">
        <div className="login-info">
          <Info
            title="SignUp"
            info="we don't share your personal information with anyone"
          />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <FormInput
            onChange={handleChange}
            type="text"
            name="firstName"
            value={firstName}
            required
            label="First Name"
          />
          <FormInput
            onChange={handleChange}
            type="text"
            name="lastName"
            value={lastName}
            required
            label="Last Name"
          />
          <FormInput
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            required
            label="email"
          />
          <FormInput
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            required
            label="password"
            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
          />
          <FormInput
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            label="Confirm Password"
            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}*$"
            // pattern = " ^[a-zA-Z0-9].{6,}*$"
            title="confirmPassword password must match with password"
          />
          {/* {password !== confirmPassword && (
            <p>confirmPassword password must match with password</p>
          )} */}
          <Button
            type="submit"
            btnClass="primary-width-100"
            buttonText="Signup"
            className="button-size"
          />
        </form>
      </div>
    </div>
  );
}
