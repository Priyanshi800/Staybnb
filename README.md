# 🏡 Staybnb – A full-stack web application


## 🎯About

Staybnb is a full-stack web application inspired by Airbnb that enables users to browse, list, and book short-term rental properties. It features user authentication, property management, and booking functionality.


## ✨ Features

- 🔐 User authentication (register/login/logout)
- 🏠 Hosts can list properties with images and details
- 🌍 Geolocation-based search with Map APIs (Mapbox) 
- ⭐ Review and rating system for users 
- 📤 Upload and manage property listings
- 📦 RESTful API structure


## 🛠️ Tech Stack

**Frontend:** HTML, CSS, JavaScript, Bootstrap  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose)  
**Tools & Libraries:** Multer (for image upload), EJS / Pug / Handlebars / Mapbox


## 🖱️Live Demo

Here is the live view of this website. It is hosted on Render https://staybnb-81j9.onrender.com/listings


## 🚀 Getting Started

1. **Clone the Repository**
```markdown
   git clone https://github.com/Priyanshi800/Staybnb
```

2. **Install Dependencies**
```markdown
    npm install
```

3. **Setup Environment Variables**
    Create a .env file in the root directory:

    PORT=8080
    MONGODB_URI=your_mongodb_connection_string
    SESSION_SECRET=your_secret_key

4. **Run the App**
```markdown
    node app.js
```

```markdown
Visit: http://localhost:8080
```


## 🧠 What I Learned

- Structuring a full-stack Node.js web application  
- Creating and securing REST APIs with Express  
- Implemented CRUD (Create, Read, Update, Delete) operations  
- Working with MongoDB and Mongoose for data modeling  
- Handling file uploads with Multer  
- Building a responsive frontend with Bootstrap


## 💡 Future Improvements

- 💳 Stripe integration for payments  
- 🔍 Users can search and filter properties(UI)
- 📅 Book properties for specific dates 
- 📱 Mobile responsiveness enhancements  
- 🛠️ Admin panel for managing listings






