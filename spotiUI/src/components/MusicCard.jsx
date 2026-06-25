const MusicCard = ({ music }) => {
  return (
    <div className="music-card">
      <div className="music-icon">
        🎵
      </div>

      <h2>{music.title}</h2>

      <p>
        {music.artist?.username}
      </p>

      <audio controls>
        <source
          src={music.url}
        />
      </audio>
    </div>
  );
};

export default MusicCard;