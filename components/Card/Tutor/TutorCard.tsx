import { TutorList } from "./TutorList";
import TutorTemplate from "./TutorTemplate";
import "../../../app/globals.css";
export default function TutorCard() {
  return (
    <>
      <div className="h-screen overflow-y-auto -mt-24 pt-16 no-scrollbar scroll-smooth focus:scroll-auto">
        <div className="flex flex-wrap justify-evenly gap-y-8">
          {TutorList.map((item) => (
            <TutorTemplate
              key={item.name}
              img={item.img}
              name={item.name}
              subject={item.subject}
              degree={item.degree}
            />
          ))}
        </div>
      </div>
    </>
  );
}
