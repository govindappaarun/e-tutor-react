import Badge from "src/components/Badge";
import Box from "src/components/Box";
import { LinkButton } from "src/components/Button/Button";
import { CartIcon } from "src/components/Icon";

export default function Test() {
  return (
    <div className="App">
      <Box className="test">
        <CartIcon hoverColor="green" />
        <Badge size="xs">0</Badge>
      </Box>

      <LinkButton color="primary">Arun here</LinkButton>
      <LinkButton color="error">Arun here</LinkButton>
    </div>
  );
}
