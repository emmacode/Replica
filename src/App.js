import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home"
import "./App.css"
import { PostDetails } from "./views/PostDetails/PostDetails";
import { LandingPage } from "./views/LandingPage";
import { Profile } from "./views/Profile/Profile";
import { EditProfile } from "./views/EditProfile/EditProfile";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
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
