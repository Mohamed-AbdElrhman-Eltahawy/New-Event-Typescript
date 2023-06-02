import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverviewProps } from "../types/OverviewTypes";
import { H3, P, Wrapper } from "./style";

export default function Overview({
  description,
  icon,
  title,
  color = "red",
}: OverviewProps) {
  return (
    <Wrapper>
      <FontAwesomeIcon size="2x" icon={icon} color={color} />
      <H3>{title}</H3>
      <P>{description}</P>
    </Wrapper>
  );
}
