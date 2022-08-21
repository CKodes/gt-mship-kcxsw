import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div>
        <Router>
          <Hero />
        </Router>
      </div>
    </>
  );
}

export default App;
