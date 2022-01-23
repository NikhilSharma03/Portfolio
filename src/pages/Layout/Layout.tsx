import React, { useState } from "react";
import Navbar from "./../../components/Navbar/Navbar";
import Hero from "./../Hero/Hero";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Connect from "../Connect/Connect";

const Layout: React.FC = () => {
  const [isSDActive, setIsSDActive] = useState<boolean>(false);

  return (
    <div className="app">
      <SideDrawer
        active={isSDActive}
        toggleSD={() => setIsSDActive((prev) => !prev)}
      />
      <Navbar toggleSD={() => setIsSDActive((prev) => !prev)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Connect />
      </main>
    </div>
  );
};

export default Layout;
