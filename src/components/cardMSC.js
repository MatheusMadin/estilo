import styles from "./cardmsc.module.css"

function CardMSC (props){
    return(
        <div className={styles.cardmsc}>
            <h3 className={styles.nomemsc}>{props.nomemsc}</h3>
            <p className={styles.nomecompo}>{props.compositor}</p>
            <iframe className={styles.spotify}src={props.linkMsc}/>
        </div>
    )


}


export default CardMSC