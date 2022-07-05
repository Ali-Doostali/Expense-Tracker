import { useState } from "react";

const TransActionForm = ({addTransaction , setIsShow}) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: [],
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler=(e)=> {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
    
};

  return (
    <form  onSubmit={submitHandler}>
      <input type="text" name="desc" placeholder="description" onChange={changeHandler} value={formValues.desc} />
      <input
        type="number"
        name="amount"
        placeholder="amount"
        onChange={changeHandler}
        value={formValues.amount}
      />
      <div className="radioBox">
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
          id="expense"
        />
        <label hrmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "income"}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className="btn primary" type="submit">Add Transaction</button>
    </form>
  );
};

export default TransActionForm;
