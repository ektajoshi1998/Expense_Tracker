import { useState ,useContext} from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const NewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAmountChange = (event)=>{
    // setAmount(event.target.value)
    let value = event.target.value
    if(selectedValue ==='expense' && !value.startsWith("-") ){
      value = `-${value}`;
    }
    else if(selectedValue==='income' && value.startsWith("-")){
      value = `${value}`;
    }
    setAmount(value);
    // console.log(amount,'amount');
    // console.log('rype', selectedValue)
  }


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
    setSelectedValue("")


  }

  return (
    <form className="flex flex-col items-center" onSubmit={submitForm}>
      <h2 className="text-lg font-semibold ">Add New Transaction</h2>

      <label htmlFor="textt" className="p-2 w-full text-left">
        Text
      </label>
      <input
        id="textt"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter New Text"
        className="w-64 p-2 bg-white"
      />

      <label htmlFor="typeOfTransaction" className="p-2 w-full text-left">
        Type of Transaction
      </label>
      <FormControl  className="p-2 bg-white w-64">
       <option value="" disabled hidden>
    Select Type
  </option>
      <Select value={selectedValue} onChange={handleChange} 
>
        <MenuItem value="expense">Expense</MenuItem>
        <MenuItem value="income">Income</MenuItem>
      </Select>
    </FormControl>

      <label htmlFor="amount" className="p-2 w-full text-left">
        Amount
      </label>
      <input
        id="amount"
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter New Text"
        className="w-64 p-2 bg-white"
      />

      <button className="mt-3 py-2 px-10 bg-slate-800 text-white">
        Add transaction
      </button>
    </form>
  );
};

export default NewTransaction;
