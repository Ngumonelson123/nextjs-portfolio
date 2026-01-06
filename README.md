# Next.js Portfolio Website

## 📌 Project Overview
This project is a personal portfolio website built using **Next.js**.  
It showcases my skills, projects, and contact information while demonstrating key Next.js features such as **page-based routing**, **server-side rendering (SSR)**, component styling, and optimized image handling.

The project is designed to be simple, scalable, and deployable to modern hosting platforms.

---

## 🚀 Features
- Page-based routing using the **Pages Router**
- Server-Side Rendering (SSR) with `getServerSideProps`
- Reusable components (Navbar)
- Global styling with CSS
- Optimized images using Next.js Image component
- Production-ready build and deployment support

---

## 🗂️ Project Structure
nextjs-portfolio/
├── pages/
│ ├── index.js # Home page
│ ├── about.js # About page
│ ├── projects.js # Projects page
│ ├── contact.js # Contact page
│ ├── ssr.js # SSR demonstration page
│ └── _app.js # Global layout and styles
├── components/
│ └── Navbar.js
├── styles/
│ └── globals.css
├── public/
│ └── profile.jpg
└── package.json


---

## 🧠 Server-Side Rendering (SSR)
This project demonstrates SSR using Next.js’ `getServerSideProps`.  
The `/ssr` page is rendered on the server for every request, fulfilling the SSR requirement.

---

## 🛠️ Technologies Used
- Next.js
- React
- JavaScript (ES6+)
- CSS
- Node.js

---

## ▶️ Getting Started

### Prerequisites
- Node.js **v20+**
- npm

### Installation
```bash
npm install
Run in Development
npm run dev


Open: http://localhost:3000

Build for Production
npm run build

🌍 Deployment

The application is ready for deployment on platforms such as:

Vercel (recommended)

Netlify

Render

👤 Author

Nelson Ngumo
DevOps & Cloud Engineer

📄 License

This project is open-source and available for learning and demonstration purposes.