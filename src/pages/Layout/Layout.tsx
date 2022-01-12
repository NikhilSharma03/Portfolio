import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import Hero from "./../Hero/Hero";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Layout;
