import React, { Component } from "react";
import { Consumer } from "../../Context";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";

class Lyrics extends Component {
  state = {
    lyrics: {},
    track: {}
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        // axios
        //   .get(
        //     `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
        //       this.props.match.params.id
        //     }&apikey=${process.env.REACT_APP_MM_KEY}`
        //   )
        //   .then(res => this.setState({ track: res.data.message.body.track }));
      })
      .catch(err => console.log(err));
  }

  render() {
    let { lyrics } = this.state;
    return (
      <Consumer>
        {value => {
          let { track_list } = value;
          let track = track_list.filter(item => {
            return item.track.track_id === Number(this.props.match.params.id);
          });
          if (
            track === undefined ||
            Object.keys(track).length === 0 ||
            lyrics === undefined ||
            Object.keys(lyrics).length === 0
          ) {
            return <Spinner />;
          } else {
            return (
              <div className="container">
                <Link to="/" className="btn btn-dark  mb-3">
                  Go back
                </Link>
                <div className="card ">
                  <h5 className="card-header">
                    <strong>{track.track_name}</strong> by{" "}
                    <span className="text-secondary">{track.artist_name}</span>
                  </h5>
                  <div className="card-body">
                    <p className="card-text">{lyrics.lyrics_body}</p>
                  </div>
                </div>
                <ul className="list-group mt-4">
                  <li className="list-group-item">
                    <strong>Album ID: </strong>
                    {track[0].track.album_id}
                  </li>
                  <li className="list-group-item">
                    <strong>Song Genre: </strong>
                    {
                      track[0].track.primary_genres.music_genre_list[0]
                        .music_genre.music_genre_name
                    }
                  </li>
                  <li className="list-group-item">
                    <strong>Explicit Words: </strong>
                    {Lyrics.explicit ? "Yes" : "No"}
                  </li>
                </ul>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Lyrics;
