import styled from "styled-components";

type FlexProps = {
  flexDirection?: "column" | "row";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
  alignSelf?: "flex-start" | "flex-end" | "center" | "stretch";
  bg?: string;
  flexShrink?: number;
};

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  background: ${(props) => props.bg};
`;
export default Flex;
