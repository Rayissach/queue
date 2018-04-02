import React, { Component } from 'react';
import Particles from 'react-particles-js';
// import logo from './logo.svg';
import './index.css';
import Login from './components/Login';
// import Wrapper from './components/Wrapper';
import ParticlesConfig from './particlesjs-config.json';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { setToken } from './actions/tokenActions';
import { playSong, stopSong, pauseSong, resumeSong } from './actions/songActions';
import './App2.css';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import UserPlaylists from './components/UserPlaylists';
import MainView from './components/MainView';
import ArtWork from './components/ArtWork';
import MainHeader from './components/MainHeader';
import SideMenu from './components/SideMenu';

class App extends Component {
  
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",

  };
  componentDidMount() {

    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if(!hashParams.access_token) {
      window.location.href = 'https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback';
    } else {
      this.props.setToken(hashParams.access_token);
    }

  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.token) {
      this.props.fetchUser(nextProps.token);
    };

    if(this.audio !== undefined) {
      this.audio.volume = nextProps.volume / 100;
    }

  }

  stopSong = () => {
    if(this.audio) {
      this.props.stopSong();
      this.audio.pause();
    }
  }

  pauseSong = () => {
    if(this.audio) {
      this.props.pauseSong();
      this.audio.pause();
    }
  }

  resumeSong = () => {
    if(this.audio) {
      this.props.resumeSong();
      this.audio.play();
    }
  }

  audioControl = (song) => {

    const { playSong, stopSong } = this.props;

    if(this.audio === undefined){
      // playSong(song.track);
      // if(song.track.preview_url) {
      //   this.audio = new Audio(song.track.preview_url);
      //   this.audio.play();
      // }

      const iframe = document.querySelector('#spotify_app');
      iframe.style.display = 'block';
      iframe.src = "https://open.spotify.com/embed?uri=" + song.track.uri;
      
    } else {
      stopSong();
      this.audio.pause();
      playSong(song.track);
      this.audio = new Audio(song.track.preview_url);
      this.audio.play();
    }
  }

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`First Name: ${this.state.firstname}\nLast Name: ${this.state.lastname}\nEmail: ${this.state.email}\nUsername: ${this.state.username}\nPassword: ${this.state.password}\n`);
    this.setState({ firstname: "", lastname: "", email: "", username: "", password: ""});
  };

  render() {
    return (
      <div>
      <Particles params={ParticlesConfig} id="particles-js" className="particles-style" width="100%" height="100%">
      </Particles>
       {/* <Wrapper> */}
       <Login className="login-style"/>
       {/* </Wrapper> */}
      </div>
    )
}
}

const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token,
    volume: state.soundReducer.volume
  };

};

const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    fetchUser,
    setToken,
    playSong,
    stopSong,
    pauseSong,
    resumeSong
  },dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
