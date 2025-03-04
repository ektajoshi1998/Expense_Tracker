import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalContext';

const Balance = () => {

  const {transactions}  = useContext(GlobalContext);
    if (!transactions) {
      return <p>Loading transactions...</p>; 
    }

    const amount = transactions.map(tran=>tran.amount);

    const totalBalance = amount.reduce(((acc,amount)=> acc+amount),0);
    // console.log(totalBa/lance)

  return (
    <div className='w-60 max-w-md text-left'>
      <h2 className='font-bold'>Your Balance</h2>
      <p>₹{totalBalance}</p>
    </div>
  )
}

export default Balance
