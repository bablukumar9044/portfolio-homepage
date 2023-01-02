import './App.css';
import Bio from './component/Bio';
import Experience from './component/Experience';
import Skills from './component/Skills';
import Contact from './component/contact';

function App() {
  return (
    <main>
      <Bio/>
      <hr/>
      <Experience/>
      <hr/>
      <Skills/>
      <hr/>
      <Contact/>
    </main>
  );
}

export default App;
