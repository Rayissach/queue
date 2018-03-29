import React from 'react';
import PropTypes from 'prop-types';
import SongControls from '../SongControls';
import VolumeControls from '../VolumeControls';
import './Footer.css';

const Footer = ({ stopSong, pauseSong, resumeSong, audioControl}) => {
  return(
    <div className='footer'>
      {/*<SongControls
        stopSong={ stopSong }
        pauseSong={ pauseSong }
        resumeSong={ resumeSong }
        audioControl={ audioControl }
      />
      <VolumeControls />*/}
      <iframe src="" id="spotify_app" style={{position:'relative', bottom:0, left:0, width:'100%', height:'200px', zIndex:9999}} frameborder="0" allow="encrypted-media" allowtransparency="true"></iframe>
    </div>
  );
};

Footer.propTypes = {
  stopSong: PropTypes.func,
  pauseSong: PropTypes.func,
  resumeSong: PropTypes.func,
  audioControl: PropTypes.func
};

export default Footer;
