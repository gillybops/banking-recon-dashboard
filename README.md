# Banking Reconciliation Dashboard

A React-based transaction reconciliation tool demonstrating frontend development skills and financial services domain expertise.

🔗 **Live Demo:** [recon.gilliannewton.com](https://recon.gilliannewton.com) *(will deploy shortly)*

---

## 🎯 Purpose

Educational demonstration project showcasing:
- React fundamentals (hooks, state management, component architecture)
- Financial services domain understanding from 6 years in banking technology
- Production-ready code practices and user experience design

---

## 💼 Background

Built by a financial services technology professional with:
- **6 years** in banking automation and testing
- **2 years** testing financial forecasting applications with Python/Selenium
- **4 years** in technical support, automating banking processes

This project demonstrates the ability to quickly learn new frameworks while applying deep domain expertise.

---

## ✨ Features

### Core Functionality
- **CSV File Upload & Parsing** - Handles system transactions and bank statements
- **Automated Matching Logic** - Matches transactions by reference, amount, and date
- **Exception Detection** - Identifies unmatched transactions requiring review
- **Real-time Statistics** - Match rate, counts, reconciliation metrics
- **Data Export** - Download matched transactions and exceptions as CSV

### Banking-Aware Design
- Validation and error handling
- Clear audit trail of reconciliation results
- Professional UI suitable for financial operations
- Exception management workflow

---

## 🛠️ Tech Stack

- **React 18** - Modern hooks-based architecture
- **Vite** - Fast build tool and dev server
- **PapaParse** - Robust CSV parsing
- **date-fns** - Date handling utilities
- Vanilla CSS/inline styles - No framework dependencies

---

## 🚀 Running Locally
```bash
# Clone repository
git clone https://github.com/gillybops/banking-recon-dashboard.git
cd banking-recon-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📊 How to Use

1. **Upload System Transactions** - CSV file from your internal system
2. **Upload Bank Statement** - CSV file from your bank
3. **Review Results** - View matched transactions and exceptions
4. **Export Reports** - Download reconciliation results

### Sample Data Format

CSV files should include: `id`, `date`, `amount`, `reference`, `description`

Example:
```csv
id,date,amount,reference,description
SYS001,2024-02-01,1500.00,REF123,Payment received
```

Sample files available in `/public/sample-data/` for testing.

---

## 🏗️ Project Structure
```
src/
├── components/
│   ├── Header.jsx              # App header
│   ├── FileUpload.jsx          # CSV upload with validation
│   ├── TransactionTable.jsx    # Data display table
│   ├── ReconciliationStats.jsx # Statistics dashboard
│   └── ExportButton.jsx        # CSV export functionality
├── utils/
│   └── matchingLogic.js        # Reconciliation algorithm
├── App.jsx                     # Main application logic
└── main.jsx                    # React entry point
```

---

## 🔍 Reconciliation Algorithm

Matches transactions when **all three criteria** align:
1. Same reference number
2. Same amount
3. Same date

Unmatched transactions are flagged as exceptions for manual review.

---

## 🎓 What I Learned

- React hooks (`useState`, `useEffect`) for state management
- Component composition and props passing
- CSV parsing and file handling in the browser
- Building domain-specific business logic
- Creating production-ready user interfaces

---

## 🚧 Future Enhancements

If this were production software, I would add:
- Backend API for data persistence
- User authentication and authorization
- Advanced filtering (date ranges, amount thresholds)
- Batch reconciliation processing
- Comprehensive test coverage (Jest, React Testing Library)
- Manual matching interface for exceptions
- Multi-currency support

---

## 📝 License

MIT License - Educational project for demonstration purposes.

---

## 👤 About

**Gillian Newton**  
Financial Services Technology Professional

- 💼 6 years in banking automation & testing
- 🐍 Python developer (Selenium, process automation)
- 🏦 Deep understanding of financial operations
- 🌐 [gilliannewton.com](https://gilliannewton.com)
- 💻 [GitHub: @gillybops](https://github.com/gillybops)

---

## ⚠️ Disclaimer

This is a demonstration project using sample data. Not intended for production use with real financial data.

Built in 72 hours as a React learning sprint while leveraging existing banking domain knowledge.