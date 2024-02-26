import { UpcomingList } from "./UpcomingList";
import UpcomingTemplate from "./UpcomingTemplate";
export default function UpcomingCard() {
  return (
    <>
      {UpcomingList.map((item) => (
        <UpcomingTemplate
          to={item.to}
          from={item.from}
          key={item.link}
          link={item.link}
          title={item.title}
          image={item.image}
        />
      ))}
    </>
  );
}
