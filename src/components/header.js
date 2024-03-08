import styles from "./header.module.css"

function Header(props){
    return(
        <div className={styles.header}>
            <img className={styles.imgheader} src={props.headersrc}/>
            <h3 className={styles.textheader}>{props.textHeader}</h3>
        </div>

    )

}

export default Header