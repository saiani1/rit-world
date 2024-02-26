import Header from "@/components/common/header/Header";
import UpdateCategory from "./UpdateCategory";
import CategoryList from "./CategoryList";

const HomeSection = () => {
  return (
    <main className="flex flex-col gap-y-2 pt-8 p-3 min-w-[800px] w-full bg-slate-300 rounded-xl">
      <Header />
      <div className="flex flex-col justify-between h-full px-8 py-11 bg-white rounded-lg border-2 border-slate-400">
        <div className="flex gap-x-4">
          <UpdateCategory />
          <CategoryList />
        </div>
      </div>
    </main>
  );
};

export default HomeSection;
