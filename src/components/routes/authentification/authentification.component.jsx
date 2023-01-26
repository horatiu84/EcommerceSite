import "./authentification.styles.scss";
import SignUpForm from "../../sign-up/sign-up-form.component";
import SignInForm from "../../sign-in/sign-in-form.component";

const Authentification = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentification;
