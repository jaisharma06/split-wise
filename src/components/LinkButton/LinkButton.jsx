import styles from './LinkButton.module.css'

const LinkButton = ({link, children, pageButton}) => {

    let btnClasses = pageButton ? styles.pageLinkBtn : styles.linkBtn; 

    return(
        <a className={btnClasses} href={link}> 
            {children}
        </a>
    )
}

export default LinkButton;