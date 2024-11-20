import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const RemoteComponent = lazy(() => import("remoteApp/RemoteComponent"));

const Home = () => (
  <div className="p-4">
    <h2>Home Page</h2>
    <p>Welcome to the host application!</p>
  </div>
);

const About = () => (
  <div className="p-4">
    <h2>About Page</h2>
    <p>This is the host application's about page.</p>
  </div>
);

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <nav
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            marginBottom: "20px",
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyle: "none",
              padding: 0,
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/remote">Remote App</Link>
            </li>
            <li>
              <a
                href="http://localhost:5001"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Remote App Separately
              </a>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/remote/*"
              element={<RemoteComponent standalone={false} />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
