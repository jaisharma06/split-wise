import styles from './Input.module.css'

const Input = ({type, placeholder, name, onChange, value, error}) => {
    let errorText = error ? '*' + error : '';
    return (
        <div className={styles.inputContainer}>
            <span className={styles.title}>{name}</span>
            <input className={styles.input} type={type} placeholder={placeholder} onChange={onChange} value = {value}></input>
            <span id={styles.errorText}>{errorText}</span>
        </div>
    );
}

export default Input;