import React from "react";
import { withRouter } from "react-router-dom";

import {
  BackgroundImageContainer,
  MenuItemContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitles,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <ContentContainer className="content">
      <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
      <ContentSubtitles>SHOP NOW</ContentSubtitles>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
