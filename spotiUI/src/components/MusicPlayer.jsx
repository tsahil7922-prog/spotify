import { useMusic } from "../context/MusicContext";
import "../styles/musicplayer.css"
const MusicPlayer = () => {
  const { currentSong } = useMusic();

  if (!currentSong) return null;

  return (
    <div className="player-bar">
      <div className="player-info">
        <h4>{currentSong.title}</h4>
        <p>{currentSong.artist?.username}</p>
      </div>

      <audio
        src={currentSong.url}
        controls
        autoPlay
      />
    </div>
  );
};

export default MusicPlayer;