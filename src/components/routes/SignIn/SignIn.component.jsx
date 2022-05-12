import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/Firebase/firebase';

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentFromAuth(user);
  console.log(userDocRef);
};

const SignIn = () => {
  return (
    <div>
      <h1>Sign in component</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
