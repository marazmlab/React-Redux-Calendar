# 💰 Currency Exchange App

Simple React + Redux learning project for currency conversion. Built to practice Redux fundamentals, API integration, and styled-components.

&nbsp;

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://marazmlab.github.io/React-Currency-Exchange-App/)

&nbsp;

## ✨ Features

- Convert between different currencies
- Add and manage currency amounts
- Fetch live exchange rates from API
- Theme switching (light/dark mode)
- Form handling with Redux state management

&nbsp;

## 🔶 Tech Stack

- **React** - Component-based UI
- **Redux** - State management  
- **Styled Components** - CSS-in-JS styling
- **Webpack** - Build tool
- **ExchangeRatesAPI** - Currency data

&nbsp;

## 🔶 What I Learned

- **Redux Basics** - Store setup, actions, and reducers
- **API Integration** - Fetching and handling external data
- **Component Architecture** - Separating logic from presentation
- **Styled Components** - CSS-in-JS and theming
- **Form Handling** - Controlled components with Redux

&nbsp;

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/marazmlab/react-currency-exchange-app.git
cd react-currency-exchange-app

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

&nbsp;

## 🔶 Project Structure

```
src/
├── components/          # React components
│   ├── CurrencyForm/   # Form for adding currencies
│   └── CurrencyTable/  # Display currency list
├── containers/         # Redux-connected components
├── redux/             # Redux store and reducers
├── services/          # API calls
└── styles/           # Styled components and themes
```

&nbsp;

## 🔶 Code Examples

### Redux Store Configuration

```javascript
import { createStore, combineReducers } from 'redux';
import currencyReducer from './reducers/currencyReducer';

const rootReducer = combineReducers({
    currency: currencyReducer,
});

const store = createStore(rootReducer);

export default store;
```

### API Integration Service

```javascript
const fetchExchangeRate = async (targetCurrency = null, date = 'latest') => {
    const API_KEY = 'd4fc05d2e0918ea984d9e900ba8f6147';
    const url = `https://api.exchangeratesapi.io/${date}?access_key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (!data.success) {
            throw new Error(data.error.type || "Unknown API error");
        }

        return data.rates;
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        return null;
    }
};
```
&nbsp;

## 🔶 Feel free to contact me

If you have any questions or feedback, feel free to reach out!  
Find me on [GitHub](https://github.com/marazmlab) or [LinkedIn](https://www.linkedin.com/in/belz/).

&nbsp;

## 🔶 Acknowledgments

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) for providing this task and code review guidance.

---

This is a learning project demonstrating basic React + Redux concepts. Feel free to explore the code and use it as a reference for your own projects!

