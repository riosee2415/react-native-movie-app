import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";

class MoviesContainer extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowPlaying: null,
    err: null
  };

  async componentDidMount() {
    let upcoming, popular, nowPlaying, error;

    try {
      ({
        data: { results: upcoming }
      } = await movies.getUpcoming());
      ({
        data: { results: popular }
      } = await movies.getPopular());
      ({
        data: { results: nowPlaying }
      } = await movies.getNowPlaying());
    } catch {
      error = "Can't get Movies.";
    } finally {
      this.setState({
        loading: false,
        error,
        upcoming,
        popular,
        nowPlaying
      });
    }
  }

  render() {
    const { loading, upcoming, popular, nowPlaying } = this.state;
    return (
      <MoviesPresenter
        loading={loading}
        upcoming={upcoming}
        popular={popular}
        nowPlaying={nowPlaying}
      />
    );
  }
}

export default MoviesContainer;
