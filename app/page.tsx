import AirPollution from "./api/AirPollution/AirPollution";
import Temprature from "./components/temprature/Temprature";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
       <Navbar />
       <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]"> <Temprature /></div>
        <div className="flex flex-col">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4"><AirPollution /></div>
        </div>
       </div>
    </main>
  );
}
