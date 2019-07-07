import React from "react";
import { Link } from "react-router-dom";

function Track(props) {
  const { track } = props;
  return (
    <div className="col-md-6" style={{ minHeight: "100px" }}>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4 className="card-title ">
            <i className="fa fa-play" aria-hidden="true" />
            {" " + track.track_name}
          </h4>
          <div className="card-text">
            <p>
              <strong>
                <i className="fas fa-user" /> Artist:
              </strong>
              {" " + track.artist_name}
            </p>
            <p>
              <strong>
                <i className="fas fa-compact-disc" /> Album:{" "}
              </strong>
              {track.album_name}
            </p>
          </div>
          <Link className="btn btn-dark btn-block" to={""}>
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Track;
