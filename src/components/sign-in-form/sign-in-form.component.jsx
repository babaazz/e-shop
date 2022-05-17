import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import {
  signInWithGooglePopup,
  signInWithEmail,
} from "../../utils/firebase/firebase.utils";

import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const clearFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmail(email, password);
      clearFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("sorry wrong password");
          break;
        case "auth/user-not-found":
          alert("Sorry user not exist");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInGoogleUser = async (event) => {
    event.preventDefault();
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <div className="buttons-container">
          <Button styleType={"default"} type="submit">
            Sign In
          </Button>
          <Button styleType={"googleSignIn"} onClick={signInGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
