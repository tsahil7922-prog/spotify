import { useMusic } from "../context/MusicContext";
import "../styles/musiccard.css";

const MusicCard = ({ music }) => {

    const { playSong } = useMusic();

    return (

        <div className="music-card">

            <div className="music-image">

                🎵

            </div>

            <h3>{music.title}</h3>

            <p>{music.artist?.username}</p>

            <button
                className="play-button"
                onClick={() => playSong(music)}
            >
                ▶ Play
            </button>

        </div>

    );
};

export default MusicCard;