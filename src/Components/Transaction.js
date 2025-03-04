import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalContext';

const Transaction = ({transaction}) => {

  const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount <0 ? '-':'+' ;

    const getBorderColor = (amount) =>{
        return amount <0 ? "border-red-500" :"border-green-500"
    }
   
  return (
    <div>
        <li className={`group relative flex justify-between items-center  m-2 p-2 bg-white px-20 border-r-4 ${getBorderColor(transaction.amount)}`} >

                      <button className='absolute left-[-40px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ' onClick={()=>deleteTransaction(transaction.id)}>❌</button>
                      <span className='text-left'>{transaction.text}</span>
                      <span >{sign}₹{Math.abs(transaction.amount)}</span>

                  </li>
    </div>
  )
}

export default Transaction
