import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { Card } from "src/components";
import { CardPropsType } from "src/components/Card";
import styled, { css } from "styled-components";

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

export const WishIcon = styled(RiHeartLine)`
  font-size: 2rem;
  cursor: pointer;
  color: ${(props) => props.theme.success.main};

  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const WishIconSolid = styled(RiHeartFill)`
  fill: ${(p) => p.theme.success.main};
  font-size: 2rem;
`;

export const ProductCard = styled(Card)<CardPropsType>`
  .wish-icon {
    position: absolute;
    right: 2rem;
  }

  .visible {
    visibility: hidden;
  }

  &:hover {
    .visible {
      visibility: visible;
    }
  }
`;
