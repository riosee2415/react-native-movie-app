import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";

const Container = styled.View``;

const Title = styled.Text`
  color: white;
`;

const MovieItem = ({ id, voteAvg, title, posterPhoto }) => (
  <Container>
    <MoviePoster path={posterPhoto} />
    <Title>{title}</Title>
    <MovieRating votes={voteAvg} />
  </Container>
);

MovieItem.prototype = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votoAvg: PropTypes.number.isRequired
};

export default MovieItem;
