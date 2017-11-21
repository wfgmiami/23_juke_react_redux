import { connect } from 'react-redux';
import Stations from '../components/Stations';


const convertSongsToStations = (songsArray) => {
  let stations = {};

  if(songsArray.length > 0){
    const genres = songsArray.reduce( ( memo, song ) => {

      memo[song.genre]=song.genre;
      return memo;
    }, {})

    const genresArray = Object.keys(genres);
    genresArray.forEach( genre => {

      let genreArray = songsArray.filter( song => song.genre === genre );
      stations[genre] = genreArray;
    })
    return stations;
  }

  // const stations = {};
  // songsArray.forEach(song => {
  //   const genre = song.genre;
  //   stations[genre] = stations[genre] || [];
  //   stations[genre].push(song);
  // });

  // return stations;

}

const mapStateToProps = ( state ) =>{


  return {
    stations: convertSongsToStations(state.songs)
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)( Stations )
