import React from 'react';
import { connect } from 'react-redux';
import station from '../components/Station';
import { convertSong } from '../utils';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = ( state, ownProps ) => {
  const genre = ownProps.params.genreName;
  const songs = state.songs.filter( song => song.genre === genre ).map( convertSong );

  return {
    songs,
    genre,
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
  }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {

  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song,list));
    }
  }
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(station);
export default StationContainer;
