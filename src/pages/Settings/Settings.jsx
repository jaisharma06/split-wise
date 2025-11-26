import styles from './Settings.module.css'
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import { useContext, useState, useEffect } from 'react'
import { appContext } from '../../context/AppContext';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { IoIosLogOut } from "react-icons/io";

const Settings = () => {
    const {localUser} = useContext(appContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
        useEffect(() => {
        if (localUser?.name) setName(localUser.name);
        if(localUser?.email) setEmail(localUser.email)
    }, [localUser]);

    return(
        <div className='pageContainer'>
            <div className={styles.settingsContainer}>
                <h2 className={styles.title}>Settings</h2>
                <h4 className={styles.subTitle}>Profile</h4>
                <Card>
                    <span className={styles.profileSection}>
                        <h1 className={styles.profileInitial}>{name.substring(0,1)}</h1>
                    </span>

                    <form className={styles.profileForm}> 
                        <Input type='text' name='Name' value={name} onChange={(e)=>{setName(e.target.value)}}></Input>
                        <Input type='email' name='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></Input>
                        <PrimaryButton onClick={(e) => e.preventDefault()}>Update</PrimaryButton>
                    </form>
                </Card>

                <button className={styles.logoutButton}><IoIosLogOut /> Log out</button>
            </div>
        </div>
    );
}

export default Settings;