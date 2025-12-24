import AppLogo from '../../components/AppLogo/AppLogo';
import Card from '../../components/Card/Card';
import DividerText from '../../components/DividerText/DividerText';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import { AiOutlineArrowRight } from "react-icons/ai";
import Input from '../../components/Input/Input';
import LinkButton from '../../components/LinkButton/LinkButton';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import Title from '../../components/Title/Title';
import styles from './Login.module.css';
import { signIn } from '../../Handlers/RequestHandler';
import { useContext, useState } from 'react';
import { appContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../../utils/animations/PageTransition';
import {validateEmailAndPassword } from '../../utils/validators/Validator';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("")
    const {localUser, setLocalUser, setAuthenticated} = useContext(appContext);  
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        
        const {isValid, emailError, passwordError} = validateEmailAndPassword(email, password);
        if(!isValid){
            setEmailError(emailError);
            setPasswordError(passwordError);
            return;
        }

        setEmailError('')
        setPasswordError('')  
        
        signIn(email, password)
        .then((res) => {
            setLocalUser(res);
            setAuthenticated(true);
            navigate('/home');
            console.log(localUser);
        })
        .catch((e) => {
            console.log('Sign in error:', e);
        });
    }

    return (
      <div className={styles.loginContainer}>
        <PageTransition>
          <div className={styles.cardContainer}>
            <Card>
              <AppLogo />
              <Title subTitle="Sign in to manage your shared expenses">
                Welcome back
              </Title>
              <GoogleButton />
              <DividerText>Or continue with email</DividerText>

              <form className={styles.form}>
                <Input
                  name="Email"
                  type="email"
                  placeholder="you@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  error={emailError}
                  value={email}
                />
                <Input
                  name="Password"
                  type="password"
                  placeholder="••••••"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  error={passwordError}
                  value={password}
                />
                <div className={styles.forgotWrapper}>
                  <a href="forgot" className={styles.forgotLink}>Forgot password?</a>
                </div>
                <PrimaryButton onClick={handleSignIn}>Sign In</PrimaryButton>
                <LinkButton link="signup" pageButton={true}>
                  Don't have an account Sign up?
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
}

export default Login;