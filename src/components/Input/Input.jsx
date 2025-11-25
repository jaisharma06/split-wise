import styles from './Input.module.css'

const Input = ({type, placeholder, name, onChange, value}) => {
    return (
        <div className={styles.inputContainer}>
            <span className={styles.title}>{name}</span>
            <input className={styles.input} type={type} placeholder={placeholder} onChange={onChange} value = {value}></input> 
        </div>
    );
}

export default Input;