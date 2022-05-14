import "./button.styles.scss";
const buttonStyle = {
  googleSignIn: "google-sign-in",
  inverted: "inverted",
  default: "",
};

const Button = ({ children, styleType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonStyle[styleType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
