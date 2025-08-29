"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import api from "@/utils/api";
import styles from "./Expenses.module.css";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    fetchExpenses();
    fetchCategories();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/api/expenses");
      setExpenses(res.data.items || []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await api.get("/api/categories");
      setCategories(res.data || []);
    } catch (err) {
      console.error("Category fetch error:", err);
    }
  };

  const addExpense = async () => {
    if (!amount || !categoryId) return alert("Please enter amount and select category");
    try {
      await api.post("/api/expenses", { amount, note, categoryId });
      setAmount("");
      setNote("");
      setCategoryId("");
      fetchExpenses();
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Expenses</h2>

      <div className={styles.form}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className={styles.input}
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className={styles.select}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button onClick={addExpense} className={styles.addButton}>
          Add
        </button>
      </div>

      <ul className={styles.expenseList}>
        {expenses.map((exp) => (
          <li key={exp._id} className={styles.expenseItem}>
            <span className={styles.expenseText}>
              💵 {exp.amount} — {exp.note || "No note"} ({exp.category?.name || "No Category"}) —{" "}
              {new Date(exp.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
