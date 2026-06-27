import { useMusic } from "../context/MusicContext";
import "../styles/musicplayer.css";

const MusicPlayer = () => {
  const {
    currentSong,
    audioRef,
    togglePlay,
    playing,
    duration,
    setDuration,
    currentTime,
    setCurrentTime,
  } = useMusic();

  if (!currentSong) return null;

  const formatTime = (time) => {
    if (!time) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <div className="player">

        {/* LEFT */}

        <div className="player-left">

          <div className="cover">
            🎵
          </div>

          <div>
            <h4>{currentSong.title}</h4>
            <p>{currentSong.artist?.username}</p>
          </div>

        </div>

        {/* CENTER */}

        <div className="player-center">

          <div className="player-controls">

            <button>⏮</button>

            <button
              className="play-btn-circle"
              onClick={togglePlay}
            >
              {playing ? "⏸" : "▶"}
            </button>

            <button>⏭</button>

          </div>

          <div className="progress-area">

            <span>{formatTime(currentTime)}</span>

            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => {
                audioRef.current.currentTime = e.target.value;
                setCurrentTime(e.target.value);
              }}
            />

            <span>{formatTime(duration)}</span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="player-right">

          🔊

        </div>

      </div>

      <audio
        ref={audioRef}
        src={currentSong.url}
        onLoadedMetadata={() =>
          setDuration(audioRef.current.duration)
        }
        onTimeUpdate={() =>
          setCurrentTime(audioRef.current.currentTime)
        }
      />
    </>
  );
};

export default MusicPlayer;