import UpdatedNewsCard from "../Card/Updated News/UpdatedNewsCard";

export default function UpdatedNews() {
  return (
    <>
      <div className="w-1/4 ml-14">
        <div className="p-4 font-semibold text-center text-xl">Daily News</div>
        <div className="bg-slate-900 p-6 pb-2 rounded-2xl">
          <UpdatedNewsCard />
        </div>
      </div>
    </>
  );
}
