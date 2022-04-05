import React, { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../formInput/formInput.component";
import Info from "../Info/Info.component";
import "./login.styles.scss";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import { useForm } from "react-hook-form";
export default function Login() {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { register, onhandeSubmit } = useForm();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Password is incorrect");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-info">
        <Info
          title="Login"
          info="get Access to your orders, wishList and recommendations"
        />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
          label="email"
          title="Must be email"
        />
        <FormInput
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
          label="password"
          minLength="8"
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
        />
        <Button type="submit" btnClass="primary-width-100" buttonText="Login" />{" "}
      </form>
    </div>
  );
}
