import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import Transaction from './Transaction';


const History = () => {
  const {transactions}  = useContext(GlobalContext);
  if (!transactions) {
    return <p>Loading transactions...</p>; 
  }

  return (
    <div className='flex flex-col'>
        <h2 className='text-lg'>History</h2>
        <div >
            <ul>
              {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
              </ul>
        </div>  
    </div>
  )
}

export default History;
