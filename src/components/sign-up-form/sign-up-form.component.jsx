import { useState } from "react";
import { createUserAuthFromEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const clearFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;
    if (
      !(displayName && email && password && confirmPassword) ||
      confirmPassword !== password
    ) {
      const error = new Error("Sorry you messed up something");
      alert(error);
      return error;
    }
    try {
      const { user } = await createUserAuthFromEmailAndPassword(
        email,
        password
      );
      user.displayName = displayName;
      clearFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already in use");
      }
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <div className="buttons-container">
          <Button styleType={"default"} type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
