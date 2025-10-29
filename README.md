# 🌟 Visouls — Coming Soon Website

A simple and elegant **Coming Soon** landing page for **Visouls**, built using **HTML, CSS, and JavaScript**.  
Visitors can subscribe with their email address to get notified when the main platform launches.

---

## 🚀 Features

- ⚡ Fully responsive and modern design  
- 📨 Email subscription form using Axios  
- 🌐 Backend integration with a Spring Boot API (hosted on Render)  
- ☁️ Frontend deployed on Netlify  
- 🎨 Smooth typography and minimal aesthetic  

---
<pre> ## 🏗️ Project Structure ``` 📁 Visouls-Frontend │ ├── 📄 index.html → Main HTML file ├── 🎨 style.css → Page styling and layout ├── ⚙️ script.js → Handles form submission and UI logic ├── 🔐 config.js → Backend API configuration (excluded from Git) │ ├── 🖼️ image/ → Image assets │ ├── logo.png │ └── icon.png │ └── 📘 README.md → Project documentation ``` </pre>
---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

### 2️⃣ Add your own `config.js`
⚠️ The `config.js` file is **not included** in this repository for security reasons.

Create a file named **config.js** in the root folder and add:
const CONFIG = {
  REST_API_BASE_URL: "https://your-backend-url.com/visoul"
};

### 3️⃣ Open the project
Simply open the `index.html` file in your browser — no build step required.

---

## 🧪 Testing Locally

1. Make sure your backend (Spring Boot) is running and accessible.  
2. Open Developer Tools → Network tab to confirm that the form submits a POST request to your backend URL.  
3. If successful, you’ll see a response like:
   201 Created
   Email saved successfully!

---

## ☁️ Deployment

### 🔹 Frontend
Hosted on **Netlify** — you can deploy easily by:
- Drag-and-dropping your folder into the Netlify dashboard, or  
- Connecting this GitHub repo to Netlify for automatic redeploys.

### 🔹 Backend
Hosted on **Render**, accessible at:
https://visoul-deployment.onrender.com/visoul

---

## 🖋️ Author

**Jagadeesh K IOT**  
📧 sjagadeesh668@gmail.com  
🌐 https://www.instagram.com/visouls.in/  
🐦 https://x.com/visoulsofficial

---

## 🛡️ License

This project is open-source and available under the **MIT License**.  
Feel free to modify or use it for educational purposes.
