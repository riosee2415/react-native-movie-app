import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";

const Image = styled.Image`
  width: 140px;
  height: 200px;
  border-radius: 2.5px;
`;

const MoviePoster = ({ path }) => (
  <Image source={{ uri: makePhotoUrl(path) }} />
);

MoviePoster.propTypes = {
  path: PropTypes.string
};

export default MoviePoster;
