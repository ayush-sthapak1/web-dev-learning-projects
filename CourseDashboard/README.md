# Course Dashboard 🎓

A multi-page React application built with **React**, **React Router**, and **Vite** that simulates a student course management system and user dashboard.

## ✨ Features
- **Client-Side Routing**: Implemented clean page navigation without page refreshes using `react-router-dom`.
- **Dynamic Routing**: Dynamic path matching for course detail pages (`/courses/:id`).
- **Nested Routes**: Configured nested routing for the `/dashboard` page to switch between:
  - **Profile** (`/dashboard/profile`)
  - **Settings** (`/dashboard/settings`)
  - **Grades** (`/dashboard/grades`)
- **Navigation Bar**: Consistent Navbar with active link styling and links for Home, About, Login, Courses, and Dashboard.
- **Fallback Page**: Custom **NotFound** component mapped to catch-all routes (`*`).

## 🛠️ Tech Stack
- **React.js**
- **React Router** (`react-router-dom`)
- **Vite**
- **CSS3**

## 🚀 Getting Started

To run the application locally:

### 1. Install Dependencies
Navigate to the `CourseDashboard` directory and install the npm packages:
```bash
npm install
```

### 2. Start the Development Server
Launch the local dev server using Vite:
```bash
npm run dev
```

### 3. Open in Browser
Open the local URL (usually [http://localhost:5173](http://localhost:5173)) in your browser.
