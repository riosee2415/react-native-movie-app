import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constants/Layout";
import MoviePoster from "./MoviePoster";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";
import MovieRating from "./MovieRating";
import { withNavigation } from "react-navigation";

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3.5};
  opacity: 0.3;
  position: absolute;
`;

const Content = styled.View`
  flex-direction: row;
  padding: 10px;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const Column = styled.View`
  width: 55%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
`;

const Overview = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  padding: 10px;
`;

const VoteContainer = styled.View`
  margin: 10px 0px;
`;

const BtnCotainer = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding: 5px;
  border-radius: 2.5px;
  margin-left: 10px;
`;

const BtnText = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
`;

const MovieSlide = ({
  id,
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview,
  navigation
}) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
    <Content>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title>{title}</Title>
        {voteAvg ? (
          <VoteContainer>
            <MovieRating votes={voteAvg} inSlide={true} />
          </VoteContainer>
        ) : null}
        {overview ? (
          <Overview>
            {overview.length > 107
              ? `${overview.substring(0, 110)}...`
              : overview}
          </Overview>
        ) : null}
        <BtnCotainer
          onPress={() =>
            navigation.navigate({
              routeName: "Detail",
              params: {
                isMovie: true,
                id,
                posterPhoto,
                backgroundPhoto,
                title,
                voteAvg,
                overview
              }
            })
          }
        >
          <BtnText>More Details</BtnText>
        </BtnCotainer>
      </Column>
    </Content>
  </Container>
);

MovieSlide.prototype = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votoAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired
};

export default withNavigation(MovieSlide);
