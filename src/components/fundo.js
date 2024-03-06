import Card from "./card"
import CardMSC from "./cardMSC"
import styles from "./fundo.module.css"
function Fundo(props){
    return(
          <div className={styles.fundocardall}>
            <div  className={styles.fundoCardSite}>
            <Card src="https://i.pinimg.com/736x/c8/c9/28/c8c928df0112091453108431b5bb066e.jpg"
           titulo="SPIDERMAN"
           p= "O Homem-Aranha, o alter ego de Peter Parker, é um super-herói das revistas em quadrinhos publicadas pela Marvel Comics. Criado pelo escritor/editor Stan Lee e pelo escritor/artista Steve Ditko."
            url ="https://www.marvel.com/characters/spider-man-peter-parker"
            atext="SITE HOMEM ARANHA(PETER PARKER)"
          />

<Card src="https://www.shutterstock.com/image-vector/batman-logo-icon-vector-template-600nw-1998917738.jpg"
            titulo="BATMAN"
            p= "Batman, também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado e Maior Detetive do Mundo, é uma personagem fictícia e super-herói da editora norte-americana DC Comics"
            url ="https://www.warnerbros.com/movies/the-batman"
            atext="SITE BATMAN"
          />

<Card src="https://cdn.worldvectorlogo.com/logos/gorillaz.svg"
            titulo="GORILLAZ"
            p= "Gorillaz é uma banda virtual de trip rock britânica criada no ano de 1998 pelo vocalista e líder do Blur, Damon Albarn, e pelo cartunista Jamie Hewlett, cocriador da história em quadrinhos Tank Girl. A banda é composta por quatro membros animados: 2-D, Murdoc, Noodle e Russel."
            url ="https://www.gorillaz.com/"
            atext="SITE GORILLAZ"
          />
          <Card src="https://styles.redditmedia.com/t5_ajkzmr/styles/communityIcon_z4n2fm2aofbc1.png"
            titulo=" ONE PIECE"
            p= "One Piece é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde julho de 1997"
            url ="https://one-piece.com/index.html"
            atext="SITE ONE-PIECE"
          />
          <Card src="https://static.vecteezy.com/ti/vetor-gratis/p3/18910695-de-logotipo-preto-spotify-simbolo-preto-spotify-gratis-de-icone-preto-spotify-gratis-vetor.jpg"
            titulo="SPOTIFY"
            p= "Spotify é um serviço de streaming de música, podcast e vídeo.É o serviço de streaming de música mais popular e usado do mundo. Ele é desenvolvido pela startup Spotify AB em Estocolmo, na Suécia."
            url ="https://open.spotify.com/intl-pt"
            atext="SITE SPOTIFY"
          />
          <Card src="https://images.gamebanana.com/img/ss/mods/5f4c0bcf166e9.jpg"
            titulo="SONIC"
            p= "Sonic the Hedgehog é uma franquia de jogos eletrônicos de plataforma criada por Yuji Naka e Naoto Oshima da equipe Sonic Team, da Sega, sendo atualmente administrada por Takashi Iizuka."
            url ="https://www.sonicthehedgehog.com/"
            atext="SITE SONIC"
          />
          <Card src="https://ordemparanormal.com.br/wp-content/uploads/2021/07/S3Fmbolo_Maior_ocultista-1-1-1024x1005.png"
          titulo="ORDEM-PARANORMAL"
           p= "Ordem Paranormal é uma websérie brasileira criada pelo streamer Rafael 'Cellbit'Lange e dirigida por Júlio Taubkin, na qual uma equipe de influenciadores jogam RPG de mesa."
          url ="https://ordemparanormal.com.br/"
          atext="SITE ORDEM-PARANORMAL"
          />
            </div>

            <div className={styles.fundoCardSite}>
              <CardMSC
              nomemsc="CLOUD 333"
              compositor="Bvtter"
              linkMsc="https://open.spotify.com/embed/track/2Dr6LbfkCNcbja2jprW687?utm_source=generator"
              />
                <CardMSC
              nomemsc="I think i'm normal"
              compositor="Carter Ace"
              linkMsc="https://open.spotify.com/embed/track/66IfNUx4NkU4cNzbOhLNC1?utm_source=generator"
              />
                  <CardMSC
              nomemsc="I think i'm normal"
              compositor="Carter ACE"
              linkMsc="https://open.spotify.com/embed/track/66IfNUx4NkU4cNzbOhLNC1?utm_source=generator"
              />
               
               <CardMSC
              nomemsc="I think i'm normal"
              compositor="Carter ACE"
              linkMsc="https://open.spotify.com/embed/track/66IfNUx4NkU4cNzbOhLNC1?utm_source=generator"
              />
               
               <CardMSC
              nomemsc="I think i'm normal"
              compositor="Carter ACE"
              linkMsc="https://open.spotify.com/embed/track/66IfNUx4NkU4cNzbOhLNC1?utm_source=generator"
              />
               
               <CardMSC
              nomemsc="I think i'm normal"
              compositor="Carter ACE"
              linkMsc="https://open.spotify.com/embed/track/66IfNUx4NkU4cNzbOhLNC1?utm_source=generator"
              />
               
               
            </div>
          
          </div>


    
    )
}

export default Fundo