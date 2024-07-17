import Chart from "./components/Charts/Chart";
import CountPerMonthChart from "./components/Charts/CountPerMonthChart";
import CountPerWeekLasMonthChart from "./components/Charts/CountPerWeekLasMonthChart";
import TweetsTable from "./components/TweetsTable/TweetsTable";

function App() {

  return (
    <>
    <header className="flex flex-row h-20 bg-blue-600 items-center p-8">
      <span className="font-bold text-lg text-white">Vk Twt App</span>
    </header>

    <main className="flex flex-row mt-4 w-full p-4">
      <div className="flex flex-col w-[65%] me-2">
          <TweetsTable />
      </div>

      <div className="flex flex-col w-[35%]">
          <div className="grid grid-cols-2 gap-4 grid-rows-2">
              <CountPerMonthChart />
              <CountPerWeekLasMonthChart />
          </div>
      </div>
    </main>
    </>
  );
}

export default App
