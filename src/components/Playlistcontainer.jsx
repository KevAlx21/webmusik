import Playlistitem from './Playlistitem';

import { SPOTIFY_PLAYLIST_DATA } from '../constants';

const { album, name: songName, artists } = SPOTIFY_PLAYLIST_DATA;

function Playlistcontainer() {
  return (
    <div className="Playlistcontainer">
      <Playlistitem
        image={album?.images[0]?.url}
        songName={songName}
        albumName={album?.name}
        artists={artists}
      />
    </div>
  );
}

export default Playlistcontainer;