### 📌 **Calculator Web App**  

A simple yet elegant **web-based calculator** that performs basic arithmetic operations. This project is designed with **HTML, CSS, and JavaScript**, providing a responsive and user-friendly interface.

## 🚀 **Live Demo**  
🔗 [Try the Calculator](https://nalsdev.github.io/Calculator/)  

---

## 📜 **Features**  
✔️ Perform basic arithmetic operations (+, -, *, /)  
✔️ Supports decimal values  
✔️ Clear button to reset calculations  
✔️ Stores the last calculation using `localStorage`  
✔️ Responsive & visually appealing design  

---

## 🛠 **Technologies Used**  
- **HTML** – Structure of the calculator  
- **CSS** – Styling for a clean UI  
- **JavaScript** – Handles calculations and user interactions  

---

## 📂 **Project Structure**  
```
Calculator/
│── index.html      # Main structure
│── styles/
│   └── styles.css  # Styling for the calculator
│── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

---

## 🔧 **Installation & Usage**  
1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/nalsdev/Calculator.git
```
2️⃣ **Open `index.html` in a browser**  
3️⃣ Start calculating! ✨  

---

## 🖥 **How It Works**  
- Clicking a **number button** appends it to the displayed value.  
- Clicking an **operator button** (`+`, `-`, `*`, `/`) performs the respective operation.  
- Clicking the **equal (`=`) button** evaluates the expression.  
- Clicking the **clear (`C`) button** resets the display.  
- The last calculation is **saved using `localStorage`**, so it persists on refresh.  

---

## 📝 **Code Snippet (Core Functionality)**  
```javascript
let calculation = localStorage.getItem('calculation') || '';
let inputElement = document.querySelector('.js-result-block');

inputElement.innerHTML = calculation;

function updateCalculation(value) {
  calculation += value;
  inputElement.innerHTML = calculation;
  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}
```

---

## 🔮 **Future Improvements**  
✅ Keyboard support for input  
✅ Scientific calculator features (%, √, etc.)  
✅ Dark mode for better UI experience  

---

## 👨‍💻 **Author**  
🔹 **Lokeshwari Natarajan** – Front-End Developer  
📧 [Contact Me](mailto:lokeshwari808@gmail.com)  

---

💡 **If you found this project useful, give it a ⭐ on GitHub!** 🚀  

---