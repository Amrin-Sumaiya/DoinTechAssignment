# ByteSpace — Online Learning Platform

<div align="center">

### A Modern, Responsive Online Learning Platform UI

A clean and interactive learning platform built with React.js, Tailwind CSS, and modern component-based architecture.

</div>

---

## 📌 Project Overview

**ByteSpace** is a modern online learning platform interface designed to provide users with an engaging and intuitive experience for discovering courses, learning resources, services, and educational content.

This project was developed as part of a frontend development assignment, with a strong focus on:

- Clean and reusable React components
- Modern UI/UX design
- Responsive layouts
- Course-focused interfaces
- User registration and login pages
- Reusable navigation and footer components
- Attractive visual elements and interactive sections

The project follows a component-based architecture to keep the application organized, maintainable, and scalable.

---

## ✨ Key Features

### 🏠 Home Page

The home page provides an engaging introduction to the ByteSpace platform.

It includes:

- Hero section
- Course discovery interface
- Featured content
- Services section
- About section
- Creator section
- Additional promotional sections
- Footer navigation

---

### 📚 Course Section

The course section displays learning resources in a structured card-based layout.

Each course card contains information such as:

- Course thumbnail
- Course title
- Course creator
- Course rating
- Difficulty level
- Student avatars
- Course price
- Course duration
- Number of lessons
- Number of comments

The card structure is designed to be reusable for displaying multiple courses.

---

### 🔐 Login Pages

The project includes dedicated authentication interfaces:

#### Login Page

Provides a clean login interface for existing users.

#### Registration Page

Provides a registration form with:

- Full Name
- Email
- Password
- Continue button
- Login navigation

The registration page also contains a visually designed course showcase section to make the authentication experience more engaging.

---

### 🎨 Modern UI Design

The interface uses:

- Bright primary colors
- Lime accent elements
- Rounded cards
- Course thumbnails
- Decorative geometric shapes
- Grid-based backgrounds
- Floating UI elements
- Student avatar groups
- Clean typography

The visual design is focused on creating a modern educational technology platform experience.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React.js | Frontend UI development |
| JavaScript | Application logic |
| Tailwind CSS | Styling and responsive layouts |
| React Icons | UI icons |
| Vite | Development environment and build tool |
| HTML5 | Application structure |
| CSS3 | Additional styling |
| Git & GitHub | Version control |

---

## 📂 Project Structure

The project follows a simple and maintainable React component structure.

```text
src/
│
├── assets/
│   ├── logo.png
│   ├── card1.png
│   ├── card2.png
│   ├── card3.png
│   ├── card4.png
│   ├── card5.png
│   ├── card6.png
│   ├── man1.png
│   ├── man2.png
│   ├── man3.png
│   ├── man4.png
│   ├── man5.png
│   ├── man6.png
│   ├── man7.png
│   └── decorative images...
│
├── components/
│   ├── AboutUs.jsx
│   ├── creatorByte.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── lastsection.jsx
│   ├── Packages.jsx
│   ├── Services.jsx
│   └── TutorialCard.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── Loginpage.jsx
│   └── RegisterPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
