import useSignUp from "./hooks/useSignUp";
import SignUpForm from "./views/SignUpForm";

const SignUpContainer = () => {
  const signupProps = useSignUp();
  return <SignUpForm {...signupProps} />;
};
export default SignUpContainer;
