import { useState } from "react";
import TransActionComponent from "./TransActionComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  return (
    <section className="container">
      <div className="topSection">
        <p>Balance : {income - expense}</p>
        <button>Add</button>
      </div>
      <div className="downSection">
        <div>Expenese : {expense}</div>
        <div>Income : {income}</div>
      </div>
      <TransActionComponent transaction={transaction} />
    </section>
  );
};

export default ExpenseApp;
