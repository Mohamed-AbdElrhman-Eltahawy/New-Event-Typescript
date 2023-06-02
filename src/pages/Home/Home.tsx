import Header from "../../components/Header";
import Overview from "../../design-system/Overview/Overview";
import overviewData from "../../design-system/Overview/OverviewData";
import { Flex } from "./style";

export default function Home() {
  return (
    <>
      <Header />
      <Flex>
        {overviewData.map((item, index) => (
          <Overview
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </Flex>
    </>
  );
}
