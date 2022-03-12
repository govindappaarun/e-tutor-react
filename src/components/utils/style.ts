import { css } from "styled-components";
import theme from "../../theme/theme";

const StyleType = {
  primary: css`
    background-color: ${theme.primary.main};
    color: ${theme.primary.contrastText};
  `,
  secondary: css`
    background-color: ${theme.secondary.main};
    color: ${theme.secondary.contrastText};
    border: 1px solid ${theme.secondary.contrastText};
  `,
  warning: css`
    background-color: ${theme.warning.main};
    color: ${theme.white};
  `,
  error: css`
    background-color: ${theme.error.main};
    color: ${theme.white};
  `,
  success: css`
    background-color: ${theme.success.main};
    color: ${theme.white};
  `,
  info: css`
    background-color: ${theme.info.main};
    color: ${theme.white};
  `,
};

const StyleFlex = {
  flex: css`
    display: flex;
  `,
  flexInline: css`
    display: inline-flex;
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
  `,
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexCenterX: css`
    display: flex;
    justify-content: center;
  `,
  flexCenterY: css`
    display: flex;
    align-items: center;
  `,
  flexWrap: css`
    display: flex;
    flex-wrap: wrap;
  `,

  flexGap0: css`
    gap: 0.5rem;
  `,
  flexGap1: css`
    gap: 1rem;
  `,
  flexGap2: css`
    gap: 2rem;
  `,
  flexGap3: css`
    gap: 3rem;
  `,
  flexGap4: css`
    gap: 4rem;
  `,
  flexGap5: css`
    gap: 5rem;
  `,
};

export { StyleType, StyleFlex };
