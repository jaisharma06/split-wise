import AppLogo from '../../components/AppLogo/AppLogo';
import Card from '../../components/Card/Card';
import DividerText from '../../components/DividerText/DividerText';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import { AiOutlineArrowRight } from "react-icons/ai";
import Input from '../../components/Input/Input';
import LinkButton from '../../components/LinkButton/LinkButton';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import Title from '../../components/Title/Title';
import styles from './Signup.module.css';

const Signup = () => {
    return(
        <div className={styles.loginContainer}>
            <div className={styles.cardContainer}>
                <Card>
                    <AppLogo/>
                    <Title subTitle="Start tracking expenses smartly today">Create Account</Title>
                    <GoogleButton/>
                    <DividerText>Or continue with email</DividerText>

                    <form className={styles.form}>
                        <Input name="Full name" type="text" placeholder="John Doe"/>
                        <Input name="Email" type="email" placeholder="you@example.com"/>
                        <Input name="Password" type="password" placeholder="••••••"/>
                        <PrimaryButton>Create Account</PrimaryButton>
                        <LinkButton link= "/" pageButton={true}>Already have an account? Sign in?</LinkButton>
                    </form>

                </Card>

                <LinkButton link= "#">Continue as guest <AiOutlineArrowRight/> </LinkButton>
            </div>
        </div>
    );
}

export default Signup;