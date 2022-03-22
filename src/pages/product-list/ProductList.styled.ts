import styled from "styled-components";

export const Wrapper = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "header header header header"
      "sidebar list list list"
      "sidebar list list list"
      "sidebar list list list"
      "footer footer footer footer";
    grid-gap: 1.5 rem;
    margin: 4rem 2rem;
  }

  .container header {
    grid-area: header;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .product-list {
    grid-area: list;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
    grid-gap: 1.25rem;
    width: 90%;
  }

  .group .header i:first-child {
    font-size: 1.5rem;
  }

  .group {
    padding: 5px 15px;
    border: 1px solid var(--grey-light);
  }

  .group-header,
  .group-item {
    cursor: pointer;
  }

  .group-header .active {
    color: var(--warning-light);
  }

  .group-item {
    margin: 10px 0;
  }

  .actions .btn,
  .flex-shrink-0 {
    flex-shrink: 0;
  }

  .product-card {
    &:hover {
      .add-to-cart {
        visibility: visible;
      }
    }
  }

  .add-to-cart {
    visibility: hidden;
  }
`;
