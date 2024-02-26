import { updatedNewsList } from "./UpdatedNewsList";
import UpdatedNewsCardTemplate from "./UpdatedNewsTemplate";
export default function UpdatedNewsCard() {
  return (
    <>
      {updatedNewsList.map((item) => (
        <UpdatedNewsCardTemplate
          key={item.link}
          title={item.title}
          desc={item.desc}
          link={item.link}
        />
      ))}
    </>
  );
}
