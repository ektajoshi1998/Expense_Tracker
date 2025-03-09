import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import Transaction from './Transaction';


const History = () => {
  const {transactions}  = useContext(GlobalContext);
  if (!transactions) {
    return <p>Loading transactions...</p>; 
  }

  return (
     
      <div className='flex flex-col '>
<h2 className='text-lg font-semibold w-64 text-center pt-4'>History</h2>
{ transactions.length>0 ?
       (   <div >
            <ul>
              {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
              </ul>
        </div> 
      ): 
      <p className=' w-64 text-center text-sm p-2 pb-4'>No transaction available</p>} 
        </div>

  )
}

export default History;
