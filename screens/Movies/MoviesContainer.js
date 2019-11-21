import React from "react";
import MoviesPresenter from "./MoviesPresenter";

class MoviesContainer extends React.Component {
  state = {
    loading: true
  };

  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}

export default MoviesContainer;
