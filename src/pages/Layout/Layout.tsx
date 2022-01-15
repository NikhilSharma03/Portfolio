import React, { useState } from "react";
import Navbar from "./../../components/Navbar/Navbar";
import Hero from "./../Hero/Hero";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Skills from "../Skills/Skills";

const Layout: React.FC = () => {
  const [isSDActive, setIsSDActive] = useState<boolean>(false);

  return (
    <div>
      <SideDrawer
        active={isSDActive}
        toggleSD={() => setIsSDActive((prev) => !prev)}
      />
      <Navbar toggleSD={() => setIsSDActive((prev) => !prev)} />
      <main>
        <Hero />
        <Skills />
      </main>
    </div>
  );
};

export default Layout;
