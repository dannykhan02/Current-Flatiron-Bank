import React, { useState } from 'react';
import './App.css';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const initialTransactions = [
  { id: 1, date: "2022-04-25", description: "Deposit", category: "Income", amount: 1000 },
  { id: 2, date: "2022-04-24", description: "wifi", category: "Expense", amount: -500 },
  { id: 3, date: "2022-04-23", description: "Food", category: "Expense", amount: -100 },
  { id: 4, date: "2022-04-22", description: "Groceries", category: "Expense", amount: -200 },
  { id: 5, date: "2022-04-21", description: "Salary", category: "Income", amount: 3000 },
  { id: 6, date: "2022-04-20", description: "Shopping", category: "Expense", amount: -50 },
  { id: 7, date: "2022-04-19", description: "Fuel", category: "Expense", amount: -40 },
  { id: 8, date: "2022-04-18", description: "Movie's", category: "Expense", amount: -30 },
  { id: 9, date: "2022-04-17", description: "Libray", category: "Expense", amount: -80 },
  { id: 10, date: "2022-04-16", description: "Netflix", category: "Income", amount: 150 },
];

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const filterTransactions = () => {
    return transactions.filter(transaction =>
      typeof searchTerm === 'string' &&
      typeof transaction.description === 'string' &&
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div>
      <h1 id="header"> Bank Of Flatiron</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <TransactionForm onSubmit={addTransaction} />
      <TransactionTable transactions={filterTransactions()} />
    </div>
  );
}

export default App;
