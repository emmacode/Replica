import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./views/Home"
//import { Post } from "./components/Post/Post";
import "./App.css"
import { PostDetails } from "./views/PostDetails/PostDetails";
import { LandingPage } from "./views/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/post" element={<Post />} /> */}
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
