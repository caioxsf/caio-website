import 'pattern.css/dist/pattern.css';

import Header from "@/components/header";
import Inicio from "@/components/inicio";
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Inicio></Inicio>
        <About></About>
        <Projects></Projects>
        <Contact/>
      </main>
    </div>
  );
}
