import styles from './card.module.css'

function Card(props){
    return(
        <div className={styles.card}>
                  <div className={styles.cardcontainer}>
            <img className={styles.img} src={props.src}/>
            <h2 className={styles.titulo}>{props.titulo}</h2>
            <p className={styles.paragrafo}>{props.p}</p>
            <a className={styles.link} href={props.url}>{props.atext}</a>
            </div>
        </div>
    )
}

export default Card