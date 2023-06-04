import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/Home/Home"));
const TweetsPage = lazy(() => import("./pages/Tweets/Tweets"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/tweets" element={<TweetsPage />}></Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
