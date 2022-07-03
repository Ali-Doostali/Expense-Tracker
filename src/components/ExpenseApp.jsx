import { useState } from "react";
import TransActionComponent from "./TransActionComponent";
import OverViewComponent from "./OverViewComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  return (
    <section className="container">
      <OverViewComponent expense={expense} income={income} />
      <TransActionComponent transaction={transaction} />
    </section>
  );
};

export default ExpenseApp;
