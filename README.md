# Banking Reconciliation Dashboard

A React-based transaction reconciliation tool demonstrating frontend development skills and financial services domain expertise.

🔗 **Live Demo:** [recon.gilliannewton.com](https://recon.gilliannewton.com)

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
- **CSV File Upload & Parsing** - Handles system transactions and bank statements with validation
- **Automated Matching Logic** - Matches transactions by reference, amount, and date
- **Exception Detection** - Identifies unmatched transactions requiring review
- **Real-time Statistics** - Match rate, counts, reconciliation metrics with visual dashboard
- **Multiple Export Options** - Download matched transactions, exceptions, and comprehensive reports
- **Sample Data Downloads** - Built-in test data for easy demonstration

### Banking-Aware Design
- **Audit Trail** - Complete activity log with timestamps for compliance
- **Loading States** - Professional feedback during processing
- **Error Handling** - Clear validation messages and user guidance
- **Professional UI** - Suitable for financial operations with polished interactions
- **Exception Management** - Dedicated workflow for reviewing unmatched items
- **Data Integrity** - Careful handling of financial data throughout the process

### User Experience
- Empty state guidance for first-time users
- Interactive hover effects and animations
- Clear visual indicators (matched vs exceptions)
- One-click data reset functionality
- Responsive layout for various screen sizes

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

1. **Download Sample Data** (optional) - Use built-in sample data buttons for testing
2. **Upload System Transactions** - CSV file from your internal system
3. **Upload Bank Statement** - CSV file from your bank
4. **Review Results** - View statistics, matched transactions, and exceptions
5. **Export Reports** - Download individual reports or comprehensive summary
6. **Check Audit Trail** - Review activity log and export for compliance

### Sample Data Format

CSV files should include: `id`, `date`, `amount`, `reference`, `description`

Example:
```csv
id,date,amount,reference,description
SYS001,2024-02-01,1500.00,REF123,Payment received
```

Sample data can be downloaded directly from the app or found in `/public/sample-data/`.

---

## 🏗️ Project Structure
```
src/
├── components/
│   ├── Header.jsx              # App header with version
│   ├── FileUpload.jsx          # CSV upload with validation
│   ├── TransactionTable.jsx    # Data display with hover effects
│   ├── ReconciliationStats.jsx # Statistics dashboard cards
│   ├── ExportButton.jsx        # Individual CSV exports
│   ├── SummaryExportButton.jsx # Comprehensive report export
│   ├── AuditTrail.jsx          # Activity log with export
│   ├── EmptyState.jsx          # Welcome screen for new users
│   └── SampleDataButtons.jsx  # Built-in test data downloads
├── utils/
│   └── matchingLogic.js        # Reconciliation algorithm
├── App.jsx                     # Main application logic
├── App.css                     # Global styles and background
└── main.jsx                    # React entry point
```

---

## 🔍 Reconciliation Algorithm

Matches transactions when **all three criteria** align:
1. Same reference number
2. Same amount
3. Same date

Unmatched transactions are flagged as exceptions for manual review. The algorithm handles edge cases including:
- Empty or partial data sets
- Duplicate references
- Missing fields
- Format validation

---

## 🎓 What I Learned

- React hooks (`useState`, `useEffect`, custom key management) for state management
- Component composition and props passing patterns
- CSV parsing and file handling in the browser
- Building domain-specific business logic for financial services
- Creating production-ready user interfaces with attention to detail
- Loading states and user feedback loops
- Audit logging for compliance requirements
- File download generation in the browser

---

## 🚧 Future Enhancements

If this were production software, I would add:
- Backend API for data persistence and history
- User authentication and role-based authorization
- Advanced filtering (date ranges, amount thresholds, search)
- Batch reconciliation processing for large datasets
- Comprehensive test coverage (Jest, React Testing Library)
- Manual matching interface for complex exceptions
- Multi-currency support with exchange rates
- Scheduled reconciliation jobs
- Email notifications for exceptions
- Integration with accounting systems

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
- ⚛️ React developer (learning sprint)
- 💻 [GitHub: @gillybops](https://github.com/gillybops)

---

## ⚠️ Disclaimer

This is a demonstration project using sample data. Not intended for production use with real financial data.

Built in 72 hours as a React learning sprint while leveraging existing banking domain knowledge.

---

## 🙏 Acknowledgments

Built as part of a rapid skill development initiative to demonstrate the ability to learn new technologies quickly while applying existing domain expertise. Special thanks to the React community for excellent documentation.