import Playlistitem from './Playlistitem';

import { SPOTIFY_PLAYLIST_DATA } from '../constants/data';

  function Playlistcontainer(){

    function renderPlaylistitem(){
      return SPOTIFY_PLAYLIST_DATA.map((item)=>{
        const {id, album, name: songName, artists}=item;
        return(
          <Playlistitem
          key={id}
          image={album.images[0]?.url}
          songName={songName}
          albumName={album.Name}
          artists={artists}
          />
        );
      });
    }
    return <div className="playlist-container">{renderPlaylistitem()}</div>;
  }

export default Playlistcontainer;