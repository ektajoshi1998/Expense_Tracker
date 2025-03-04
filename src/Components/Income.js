import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalContext';

const Income = () => {
  
    const {transactions}  = useContext(GlobalContext);
      if (!transactions) {
        return <p>Loading transactions...</p>; 
      }
  
      const amount = transactions.map(tran=>tran.amount);
      const income= amount.filter(item => item>0).reduce(((acc,item)=>item+acc),0).toFixed(2);
      // console.log(income);

      const expense = amount.filter(item=>item<0).reduce(((acc,item)=>acc+item),0)* -1;
      // console.log(expense)
  return (
    <div className=' flex flex-row space-x-8 bg-white text-black px-12 py-6 '>
      <div >
        <h2>Income</h2>
        <p>+₹{income}</p>
      </div>
      <div>
        <h2>Expense</h2>
        <p>-₹{expense}</p>
      </div>
    </div>
  )
}

export default Income
