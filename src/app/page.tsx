"use client";
import About from "./components/about";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Section from "./components/section";
import TopBar from "./components/top-bar";

export default function Home() {

  return (
    <main className=" bg-slate-900" style={{fontFamily: "Font Awesome 5 Free"}}>
      <Section>
        <Landing />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
    </main>
  );
}
