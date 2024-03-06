import styles from './text.module.css';

function Texts(props){
    return(
        <div>
            <h1 className={styles.hs1}>{props.H1}</h1>
            <h2 className={styles.hs2}>{props.H2}</h2>
            <h3 className={styles.hs3}>{props.H3}</h3>
            <h4 className={styles.hs4}>{props.H4}</h4>
            <h5 className={styles.hs5}>{props.H5}</h5>
            <h6 className={styles.hs6}>{props.H6}</h6>
        </div>
    )
}

export default Texts