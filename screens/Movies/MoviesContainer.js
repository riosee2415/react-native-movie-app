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
    try {
      const upcoming = await movies.getUpcoming();
      const popular = await movies.getPopular();
      const nowPlaying = await movies.getNowPlaying();
      console.log("UPCOMING", upcoming);
      console.log("POPULAR", popular);
      console.log("NOWPLAYING", nowPlaying);
    } catch (error) {
      console.log(error);
      this.setState({
        err: "Can't get Movies"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}

export default MoviesContainer;
