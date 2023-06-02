import {
  faMicrophone,
  faUserGroup,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import { OverviewProps } from "../types/OverviewTypes";

const overviewData: OverviewProps[] = [
  {
    icon: faUserGroup,
    title: "650 Participants",
    description:
      "Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.",
  },
  {
    icon: faUserTimes,
    title: "24 Programs",
    description:
      "Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.",
  },
  {
    icon: faMicrophone,
    title: "11 Speakers",
    description:
      "Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.",
  },
];

export default overviewData;
