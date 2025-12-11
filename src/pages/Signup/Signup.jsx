import AppLogo from "../../components/AppLogo/AppLogo";
import Card from "../../components/Card/Card";
import DividerText from "../../components/DividerText/DividerText";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import { AiOutlineArrowRight } from "react-icons/ai";
import Input from "../../components/Input/Input";
import LinkButton from "../../components/LinkButton/LinkButton";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Title from "../../components/Title/Title";
import styles from "./Signup.module.css";
import PageTransition from "../../utils/animations/PageTransition";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../utils/validators/Validator";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const validateInputs = () => {
    const passwordValidation = validatePassword(password);
    const emailValidation = validateEmail(email);
    const nameValidation = validateName(name);

    if (
      !passwordValidation.isValidPassword ||
      !emailValidation.isValidEmail ||
      !nameValidation.isValid
    ) {
      setEmailError(emailValidation.emailMessages[0]);
      setPasswordError(passwordValidation.passwordMessages[0]);
      setNameError(nameValidation.messages[0]);
      return false;
    }

    setPasswordError("");
    setEmailError("");
    setNameError("");
    return true;
  };

  const onSignup = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }
  };

  return (
      <div className={styles.loginContainer}>
        <PageTransition>
        <div className={styles.cardContainer}>
          <Card>
            <AppLogo />
            <Title subTitle="Start tracking expenses smartly today">
              Create Account
            </Title>
            <GoogleButton />
            <DividerText>Or continue with email</DividerText>

            <form className={styles.form}>
              <Input
                name="Full name"
                type="text"
                placeholder="John Doe"
                error={nameError}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <Input
                name="Email"
                type="email"
                placeholder="you@example.com"
                error={emailError}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <Input
                name="Password"
                type="password"
                placeholder="••••••"
                error={passwordError}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <PrimaryButton onClick={onSignup}>Create Account</PrimaryButton>
              <LinkButton link="/" pageButton={true}>
                Already have an account? Sign in?
              </LinkButton>
            </form>
          </Card>

          <LinkButton link="#">
            Continue as guest <AiOutlineArrowRight />{" "}
          </LinkButton>
        </div>
         </PageTransition>
      </div>
   
  );
};

export default Signup;
