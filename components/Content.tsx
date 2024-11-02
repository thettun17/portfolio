import Navbar from "./Navbar";
export default function Content() {
  return (
    <div className="w-5/6 bg-primaryColor relative rounded-lg">
      <Navbar />
      <h2 className="text-lg font-bold mt-6 pl-4">
        About Me
        <div className="border-b border-2  border-iconColor w-[2%]"></div>
      </h2>
    </div>
  );
}
