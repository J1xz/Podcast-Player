import styles from './styles.module.css';


type PropsHead = {
  img: string;
  texto1: string;
  texto2: string;
};

export function Header(props: PropsHead) {
  const { img, texto1, texto2 } = props;
  return (
    <div className={styles.header}>
      <img className={styles.avatar} src={img} alt="User Foto" />
      <div className={styles.texto}>
        <p>{texto1}</p>
        <h2>{texto2}</h2>
      </div>
    </div>
  );
}

type CardInfo = {
  img: string;
  texto1: string;
  texto2: string;
  songs?: string;
};
type PropsPL = {
  playlist: CardInfo;
};

//Listen Again
export function Playlist(props: PropsPL) {
  const { playlist } = props;
  const part2 = playlist.songs ? " - " + playlist.songs : "";
  return (
    <div className={styles.playlist}>
      <a href="">
        <img
          className={styles.portadaPL}
          src={playlist.img}
          alt="Playlist Foto"
        />
      </a>
      <h3>{playlist.texto1}</h3>
      <p>
        {playlist.texto2} {part2}
      </p>
    </div>
  );
}

//Similar To
export function PlaylistCircle(props: PropsPL) {
  const { playlist } = props;
  const part2 = playlist.songs ? " - " + playlist.songs : "";
  return (
    <div className={styles.playlist}>
      <a href="">
        <img
          className={styles.portadaQuickP}
          src={playlist.img}
          alt="Playlist Foto"
        />
      </a>
      <h3>{playlist.texto1}</h3>
      <p>
        {playlist.texto2} {part2}
      </p>
    </div>
  );
}

//Quick Picks
type PropsMusic = {
  music: CardInfo;
};
export function Music(props: PropsMusic) {
  const { music } = props;
  return (
    <div className={styles.cancion}>
      <a href="">
        <img className={styles.portadaMusic} src={music.img} alt="cancion Foto" />
      </a>
      <div className="texto">
        <h4>{music.texto1}</h4>
        <p>{music.texto2}</p>
      </div>
    </div>
  );
}

//Box
type User = {
  img: string;
  name: string;
};
type Props = {
  user: User;
  texto1: string;
  texto2: string;
  arrayCard: CardInfo[];
};

export function SectionBox(props: Props) {
  const { user, texto1, texto2, arrayCard } = props;
  return (
    <div className={styles.seccion}>
      <Header img={user.img} texto1={texto1} texto2={texto2} />
      <div className={styles.scrollable_container}>
        {arrayCard.map((PL, index) => (
          <Playlist key={index} playlist={PL} />
        ))}
      </div>
    </div>
  );
}

export function SectionCircle(props: Props) {
  const { user, texto1, texto2, arrayCard } = props;
  return (
    <div className={styles.seccion}>
      <Header img={user.img} texto1={texto1} texto2={texto2} />
      <div className={styles.scrollable_container}>
        {arrayCard.map((PL, index) => (
          <PlaylistCircle key={index} playlist={PL} />
        ))}
      </div>
    </div>
  );
}

export function SectionSongs(props: Props) {
  const { user, texto1, texto2, arrayCard } = props;
  return (
    <div className={styles.seccion}>
      <Header img={user.img} texto1={texto1} texto2={texto2} />
      <div className={styles.canciones_container}>
        {arrayCard.map((PL, index) => (
          <Music key={index} music={PL} />
        ))}
      </div>
    </div>
  );
}
