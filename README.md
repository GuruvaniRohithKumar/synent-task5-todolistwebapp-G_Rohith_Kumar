# 📅 Weekly Habit Tracker

A modern and responsive habit-tracking web application built using **HTML, CSS, and Vanilla JavaScript**. This application helps users create habits, track daily progress throughout the week, export data as CSV files, and store progress locally using the browser's Local Storage.

---

# 📖 Overview

The Weekly Habit Tracker is designed to help users build positive habits and maintain consistency in their daily routines. Users can add habits, mark their completion status for each day of the week, export progress reports, and manage their habits through an intuitive and visually appealing interface.

This project is built entirely with front-end technologies and requires no backend, database, or external frameworks.

---

# ✨ Features

## Habit Management

* Add unlimited habits
* Delete individual habits
* Clean and organized habit list

## Weekly Progress Tracking

* Track habits for all seven days of the week
* Toggle completion status with a single click
* Visual indicators for completed days

## Local Storage Persistence

* Automatically saves all habit data
* Data remains available after refreshing the page
* No account or login required

## CSV Export

* Export habit data as a CSV file
* Compatible with:

  * Microsoft Excel
  * Google Sheets
  * Apple Numbers

## Reset Functionality

* Clear all habits and progress data
* Confirmation prompt prevents accidental deletion

## Modern UI Design

* Glassmorphism-inspired interface
* Smooth animations and transitions
* Responsive layout for various screen sizes

---

# 🛠️ Technologies Used

| Technology        | Purpose                |
| ----------------- | ---------------------- |
| HTML5             | Structure and layout   |
| CSS3              | Styling and animations |
| JavaScript (ES6)  | Application logic      |
| Local Storage API | Data persistence       |
| CSV Export        | Data backup            |

---

# 📂 Project Structure

```bash
Weekly-Habit-Tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---


# ▶️ Running the Project

## Method 1: Open Directly

Open the `index.html` file in any modern web browser.

```bash
index.html
```

## Method 2: Using VS Code Live Server

1. Install the Live Server extension.
2. Open the project folder in VS Code.
3. Right-click on `index.html`.
4. Select **Open with Live Server**.

---

# 📖 How to Use

## Add a Habit

1. Enter a habit name in the input field.
2. Click **Add Habit**.

Examples:

* Exercise
* Reading
* Meditation
* Drink Water
* Coding Practice

---

## Track Daily Progress

Click any day indicator to mark the habit as completed.

* Green = Completed
* Empty = Not Completed

Click again to unmark.

---

## Export Data

Click the **💾 Backup Data** button.

The application will generate and download:

```text
my_habits_table.csv
```

This file can be opened in Excel, Google Sheets, or Apple Numbers.

---

## Delete a Habit

Click the **Delete** button beside any habit.

A confirmation dialog will appear before deletion.

---

## Reset All Data

Click **🗑️ Reset Everything**.

After confirmation:

* All habits are removed
* All progress history is deleted
* Local storage data is cleared

---

# 💾 Data Storage

The application stores data using the browser's Local Storage.

Storage key:

```javascript
habits
```

Example data structure:

```javascript
[
  {
    name: "Exercise",
    history: [true, false, true, true, false, true, true]
  }
]
```

Data remains available until manually deleted by the user.

---

# 🎨 User Interface Highlights

* Glassmorphism card design
* Smooth hover animations
* Responsive layout
* Interactive completion indicators
* Modern typography using Plus Jakarta Sans

---

# 🔍 Core Functionalities

## Add Habit

Creates a new habit object:

```javascript
{
  name: "Exercise",
  history: [false, false, false, false, false, false, false]
}
```

## Toggle Progress

Updates completion status for the selected day:

```javascript
history[dayIndex] = !history[dayIndex];
```

## Save Data

Stores habits in Local Storage:

```javascript
localStorage.setItem('habits', JSON.stringify(habits));
```

## Export CSV

Converts habit data into a downloadable CSV file.

Example:

```csv
Habit Name,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
Exercise,Done,Pending,Done,Done,Pending,Done,Done
```

---

# 🧠 Learning Outcomes

This project demonstrates practical understanding of:

* DOM Manipulation
* Event Handling
* Dynamic Rendering
* State Management
* Local Storage API
* CSV File Generation
* Responsive Web Design
* CSS Animations
* Modern UI Design Principles

---

# 🚀 Future Improvements

Potential enhancements include:

* Weekly streak tracking
* Monthly analytics dashboard
* Habit categories
* Edit habit functionality
* Search and filtering
* Drag-and-drop sorting
* Dark/Light theme toggle
* Progressive Web App (PWA) support
* Cloud synchronization

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

```bash
git checkout -b feature/new-feature
```

2. Make your changes

```bash
git commit -m "Add new feature"
```

3. Push changes

```bash
git push origin feature/new-feature
```

4. Open a Pull Request

---

# 🐛 Known Limitations

* Data is stored only in the browser.
* No cloud synchronization.
* No user authentication.
* Progress is device-specific.
* Weekly data does not automatically reset.

---

# 📋 Browser Compatibility

Tested on:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari
* Brave Browser

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Your Name**

GitHub: https://github.com/your-username

---

⭐ If you found this project useful, consider giving it a star on GitHub.
