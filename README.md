# Mini Product Dashboard

A simple, interactive product dashboard built using **HTML, CSS, and Vanilla JavaScript**.  
The project fetches product data from an external API and allows users to search and filter products dynamically.

---

## Features

- Fetches products from a public API
- Displays products as responsive cards
- Live search by product title
- Category-based filtering
- Combined search + category filtering
- Displays total product count and total price
- Fully dynamic UI (no page reloads)

---

## Concepts Used

- DOM Manipulation
- Event Handling
- State-driven UI
- `fetch` API with `async / await`
- Error handling
- Array methods:
  - `.map()`
  - `.filter()`
  - `.reduce()`
- Derived data (UI calculated from state)
- Responsive layout with CSS Grid

---

## Project Structure

```
Product-dashboard/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## API Used

- https://fakestoreapi.com/products

---

## How It Works

1. Products are fetched from the API on page load.
2. Data is stored as application state.
3. Categories are extracted dynamically from the data.
4. UI is rendered based on filtered state.
5. User interactions (search & filter) update state and re-render the UI.

---

## Purpose

This project was built to practice **core frontend fundamentals** before moving to frameworks like React, focusing on clean architecture and clear data flow.

---

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)

---

## Notes

- No frameworks or libraries were used.
- All UI updates are handled using vanilla JavaScript.

