import styles from "./footer.module.css"
function Footer(props){
    return(
        <div className={styles.footer}>
            <h4 className={styles.footertext}>{props.footerText}</h4>

        </div>
    )
}

export default Footer