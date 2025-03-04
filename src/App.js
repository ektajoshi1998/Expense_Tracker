import './App.css';
import Header from './Components/Header';
import History from './Components/History';
import Balance from './Components/Balance';
import NewTransaction from './Components/NewTransaction';
import Income from './Components/Income';
import {GlobalProvider} from './Context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
    <div  className='flex flex-col items-center mt-20 bg-slate-200 space-y-4 '>
        <Header/>
        <Balance/>
        <Income/>
        <History/>
        <NewTransaction/>
    </div>
     </GlobalProvider>

  );
}

export default App;
