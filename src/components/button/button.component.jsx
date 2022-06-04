import {
  DefaultButton,
  InvertedButton,
  GoogleSignInButton,
} from "./button.styles";
export const BUTTON_TYPE = {
  googleSignIn: "google-sign-in",
  inverted: "inverted",
  default: "default",
};

const getButton = (buttonType = BUTTON_TYPE.default) =>
  ({
    [BUTTON_TYPE.default]: DefaultButton,
    [BUTTON_TYPE.googleSignIn]: GoogleSignInButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
  }[buttonType]);

export const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
