import { useEffect, useState } from "react";
import TransActionComponent from "./TransActionComponent";
import OverViewComponent from "./OverViewComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (formValues) => {
    const data = {...formValues , id : Date.now()};
    setTransaction([...transaction,data]);
  };

  useEffect(()=>{
      let exp = 0;
      let inc = 0;
      transaction.forEach((t) => {
        t.type === "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount));
      });
      setExpense(exp);
      setIncome(inc);
  },[transaction]);

  return (
    <section className="container">
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <TransActionComponent transaction={transaction} />
    </section>
  );
};

export default ExpenseApp;
