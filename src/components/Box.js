/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { color } from "styled-system";
import styled from "@emotion/styled";

const Box = styled.div`
  ${color}
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

export default Box;
