// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
// import {
//   auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from '../../../utils/Firebase/firebase';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/Firebase/firebase';
import SignUpForm from '../../SignUpForm/SignUpForm.component';

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentFromAuth(user);
  console.log(userDocRef);
};

const SignIn = () => {
  // useEffect(() => {
  //   async function firebaseRedirectResult() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }

  //   firebaseRedirectResult();
  // }, []);

  return (
    <div>
      <h1>Sign in component</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
