import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./views/Home"
//import { Post } from "./components/Post/Post";
import "./App.css"
import { PostDetails } from "./views/PostDetails/PostDetails";
import { LandingPage } from "./views/LandingPage";
import { Profile } from "./views/Profile/Profile";
import { LoginForm } from "./views/Auth/LoginForm";
import { RegisterForm } from "./views/Auth/RegisterForm";
import { EditProfile } from "./views/EditProfile/EditProfile";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<RegisterForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings/edit" element={<EditProfile />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
