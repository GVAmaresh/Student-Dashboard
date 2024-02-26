import Image from "next/image";
import UpcomingCard from "../Card/Upcoming/UpcomingCard";

export default function Upcoming() {
  return (
    <>
      <div className="Upcoming">
        <div className="UpcomingHeading">
          <div className="Upcoming-heading">Upcoming Classes</div>
          <div className="flex items-center">
            <span className="ml-2">See More</span>
          </div>
        </div>
        <div className="Upcoming-Boxes">
          <UpcomingCard />
        </div>
      </div>
    </>
  );
}
