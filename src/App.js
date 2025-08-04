import "./App.css";
import TransactionHistory from "./TransactionHistory";
import transactions from "./transactions.json";

function App() {
  return (
    <div className="App">
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
