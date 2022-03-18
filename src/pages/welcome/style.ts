import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  height: 100vh;

  .hero {
    max-width: 15ch;
    margin: 0 auto;
  }

  .get-started {
    margin-top: 7.5rem;
    text-align: center;
  }

  .right {
    margin: 3.5rem;
  }

  @media (max-width: 825px) {
    .container {
      grid-template-columns: 1fr;
    }

    .hero {
      font-size: 7vw;
    }

    .right {
      margin: 3.5rem 12rem;
      grid-row: 1;
    }
    .get-started {
      margin: 3.5rem 0;
    }
  }

  @media screen and (max-width: 625px) {
    .hero {
      font-size: 10vw;
    }

    .right {
      margin: 3.5rem;
      grid-row: 1;
    }
  }
`;

export default Wrapper;
