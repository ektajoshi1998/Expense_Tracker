import { useState ,useContext} from "react";
import { GlobalContext } from "../Context/GlobalContext";


const NewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const submitForm = (e)=>{
    e.preventDefault();
    const newTransaction ={
      id:  Math.floor(Math.random() * 100000000),
      text,
      amount:+amount
    }
    addTransaction(newTransaction);
    setText("");
    setAmount(0);


  }

  return (
    <form className="flex flex-col" onSubmit={submitForm}>
      <h2 className="font-bold mb-2">Add New Transaction</h2>
      <label htmlFor="textt" className="text-lg">
        Text
      </label>
      <input
        id="textt"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter New Text"
        className="py-1 px-10 bg-white"
      />

      <label htmlFor="amount" className="text-lg">
        Amount
        <br />
        (negative-expense, positive-income)
      </label>
      <input
        id="amount"
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        placeholder="Enter New Text"
        className="py-1 px-10 bg-white"
      />

      <button className="mt-3 py-2 px-10 bg-slate-800 text-white">
        Add transaction
      </button>
    </form>
  );
};

export default NewTransaction;
