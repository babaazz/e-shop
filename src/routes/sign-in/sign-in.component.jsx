import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const signInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div className="signIN">
      <h1> Sign In With Google</h1>
      <button onClick={signInGoogleUser}>Sign In</button>
    </div>
  );
};

export default SignIn;
