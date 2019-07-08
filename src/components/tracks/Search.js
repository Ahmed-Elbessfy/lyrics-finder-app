import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../Context";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  getLyrics = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACK",
          payload: res.data.message.body.track_list
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          let { dispatch } = value;
          return (
            <div className="card text-center mb-4 p-4">
              <div className="card-body">
                <h4 className="display-4">
                  <i className="fa fa-music" aria-hidden="true" /> Search for A
                  Song
                </h4>
                <p className="lead">Get lyrics of any song </p>
                <form onSubmit={this.getLyrics.bind(this, dispatch)}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Song title.."
                      name="trackTitle"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-block btn-lg"
                    type="submit"
                  >
                    Get Lyrics
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
