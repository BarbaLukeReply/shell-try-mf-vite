import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/local/Header";
import Sidebar from "./components/local/SideBar";
import Page1 from "./components/remote/Page1";
import Page2 from "./components/remote/Page2";
import { AlertsProvider } from "./context/alerts/alert-context";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#e0facb]">
      <div className="flex">
        <Header />
      </div>
      <div className="flex flex-grow">
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        <div className="flex-grow p-4 h-full">{children}</div>
      </div>
      <div className="flex">
        sono il footer
      </div>
    </div>
  );
};

function App() {
  return (
    <AlertsProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/page1/*" element={<Page1 />} />
            <Route path="/page2/*" element={<Page2 />} />
          </Routes>
        </Layout>
      </Router>
    </AlertsProvider>
  );
}

export default App;
