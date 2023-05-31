import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home"
import { Post } from "./components/Post/Post";
import "./App.css"
import { PostDetails } from "./components/PostDetails/PostDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          {[
            ['Home', '/'],
            ['Post', '/post'],
            // ['Projects', '/projects'],
            // ['Reports', '/reports'],
          ].map(([title, url]) => (
            <a href={url} key={title} className="header-link">{title}</a>
          ))}
        </header>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:postId" element={<PostDetails />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
