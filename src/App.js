import "./App.css";
import Header from "./Components/Header";
import History from "./Components/History";
import Balance from "./Components/Balance";
import NewTransaction from "./Components/NewTransaction";
import Income from "./Components/Income";
import { GlobalProvider } from "./Context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="flex items-center justify-center h-screen bg-stone-400">
        <div className="flex flex-col items-center w-full max-w-[500px] p-9 bg-stone-300 shadow-md rounded-md">
          <Header />
          <Balance />
          <Income />
          <History />
          <NewTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
