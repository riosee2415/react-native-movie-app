import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, GREY_COLOR, TINT_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";

const Container = styled.View`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`;

const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 1);
  width: ${Layout.width / 1.5};
  border-radius: 20px;
  padding: 10px 10px;
  text-align: center;
`;

const SearchResults = styled.ScrollView``;

const SearchPresenter = ({
  loading,
  movieResults,
  tvResults,
  searchTerm,
  handleSearchUpdate,
  onSubmitEditing
}) => (
  <Container>
    <InputContainer>
      <Input
        onChangeText={handleSearchUpdate}
        value={searchTerm}
        autoFocus
        returnKeyType={"search"}
        placeholder="Search Movies and TV"
        placeholderTextColor={GREY_COLOR}
        onSubmitEditing={onSubmitEditing}
        autoCorrect={false}
      />
    </InputContainer>

    <SearchResults></SearchResults>
  </Container>
);

SearchPresenter.prototype = {
  loading: PropTypes.bool.isRequired,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSearchUpdate: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired
};

export default SearchPresenter;
