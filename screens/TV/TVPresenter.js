import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import MovieItem from "../../components/MovieItem";
import Section from "../../components/Section";
import styled from "styled-components";
import { BG_COLOR } from "../../constants/Colors";
import { Text } from "react-native";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresenter = ({ loading, popular, airingThisWeek, airingToday }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday ? (
        <Section title="Airing Today">
          {airingToday
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {popular ? (
        <Section title="popular">
          {popular
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}

      {airingThisWeek ? (
        <Section title="airingThisWeek">
          {airingThisWeek
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
