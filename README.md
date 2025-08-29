# Expense-Tracker
# Expense Tracker (MERN + GraphQL Subscriptions)

A full-stack **MERN application** with **GraphQL (Apollo)**, real-time **subscriptions**, and a **smart suggestion engine** that helps users manage expenses better.

## 🚀 Features
- Add, update, and delete expenses by category  
- Set **monthly and category-wise spending limits**  
- Real-time updates with **GraphQL Subscriptions**  
- **Alerts** when limits are exceeded  
- **Smart suggestions** on where to spend more or less (50/30/20 rule + custom budgets)  
- Visualize monthly totals and category breakdowns  

## 🛠 Tech Stack
- **Backend**: Node.js, Express, Apollo Server, GraphQL, MongoDB, Mongoose  
- **Frontend**: React (Vite), Apollo Client, graphql-ws, Recharts  
- **Subscriptions**: graphql-ws + PubSub (in-memory)  

## 📂 Project Structure
- `expense-tracker-backend/` → GraphQL API, Subscriptions, MongoDB models  
- `expense-tracker-frontend/` → React app with Apollo Client + UI  

## ⚡ Quick Start
### Backend
```bash
cd expense-tracker-backend
npm install
npm run dev