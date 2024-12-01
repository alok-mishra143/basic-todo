

I made this to refresh my MERN stack knowlege

# 📝 Todo Application  
A sleek, powerful, and intuitive full-stack Todo application designed for efficiency and style. Experience task management like never before with our modern dark-mode interface.  



## 🚀 Features  
- Effortlessly create and manage todos  
- View all tasks at a glance  
- Mark tasks as completed with ease  
- Responsive and modern UI with dark mode  
- Smooth animations for an enhanced user experience  



## 🛠️ Built With  

### **Frontend**  
- **React 18**  
- **Vite**  
- **CSS**  

### **Backend**  
- **Express.js**  
- **MongoDB** & **Mongoose**  
- **Zod** (Data validation)  
- **dotenv** (Environment configuration)  
- **CORS** (Cross-origin resource sharing)  



## 💻 Installation  

### **Prerequisites**  
- **Node.js** (v14 or higher)  
- **npm** (v6 or higher)  
- **MongoDB** (Running instance)  

### **Steps**  
1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/yourusername/todo-application.git  
   cd todo-application  
   ```  

2. **Backend Setup**:  
   - Navigate to the `backend` directory:  
     ```bash  
     cd backend  
     ```  
   - Create a `.env` file and add your MongoDB URI:  
     ```env  
     MONGO_URI=your-mongodb-uri  
     ```  
   - Install dependencies and start the backend server:  
     ```bash  
     npm install  
     npm start  
     ```  
   - The backend server will run on **http://localhost:3000**.  

3. **Frontend Setup**:  
   - Navigate to the `frontend` directory:  
     ```bash  
     cd ../frontend  
     ```  
   - Install dependencies and start the development server:  
     ```bash  
     npm install  
     npm run dev  
     ```  
   - The frontend will be accessible at **http://localhost:5173**.  



## 🎮 Usage  
1. Open your browser and navigate to **http://localhost:5173**.  
2. Use the **Create Todo** form to add new tasks.  
3. View all your todos below the form.  
4. Click **Mark as Done** to mark tasks as completed.  



## 📖 API Endpoints  

| **Method** | **Endpoint**    | **Description**             | **Request Body** |  
|------------|-----------------|-----------------------------|------------------|  
| `POST`     | `/todos`        | Create a new todo           | `{ title: string }` |  
| `GET`      | `/todo`         | Retrieve all todos          | N/A              |  
| `PUT`      | `/todo-done`    | Mark a todo as completed    | `{ id: string }` |  


## 🗂️ Project Structure  

```bash  
todo-application/  
├── backend/  
│   ├── controllers/  
│   ├── models/  
│   ├── routes/  
│   ├── server.js  
├── frontend/  
│   ├── public/  
│   ├── src/  
│   ├── vite.config.js  
```  


## 🤝 Contributing  
We welcome contributions to improve this project!  
- Open an **issue** for bug reports or feature suggestions.  
- Submit a **pull request** for improvements or fixes.  




