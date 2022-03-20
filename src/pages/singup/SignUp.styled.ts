import styled from "styled-components";

export const Wrapper = styled.div`
  main {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    height: calc(100vh - 120px);
    place-items: center;
  }

  .wallpaper {
    grid-column: 1 / span 6;
    background-color: #ebebff;
    height: 100%;
    img {
      max-width: 650px;
    }
  }

  .form-container {
    grid-column: 7 / span 6;
    margin: 0 30px;
  }

  @media screen and (max-width: 850px) {
    .wallpaper {
      display: none;
    }
    .form-container {
      grid-column: 1/12;
    }
  }
`;
