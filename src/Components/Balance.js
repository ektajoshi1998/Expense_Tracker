import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalContext';

const Balance = () => {

  const {transactions}  = useContext(GlobalContext);
    if (!transactions) {
      return <p>Loading transactions...</p>; 
    }

    const amount = transactions.map(tran=>tran.amount);

    const totalBalance = amount.reduce(((acc,amount)=> acc+amount),0);

  return (
    // <div className='w-60 max-w-md text-left'>
    <div className='flex flex-col items-center mt-6'>
      <h2 className='font-semibold text-lg'>Your Balance</h2>
      <p>₹{totalBalance}</p>
    </div>
  )
}

export default Balance
