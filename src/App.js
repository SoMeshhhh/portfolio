import Nav from './components/Navbar';
import Home from './components/Home';
import { NextUIProvider } from '@nextui-org/react';
import Technology from './components/Technology';
import Talk from './components/Talk';
import Connect from './components/Connect'
import { Slide, Zoom } from 'react-reveal';

function App() {
  return (
    <div className="App">

      <NextUIProvider>
        <Nav />
        <Home />
        <Slide>
          <Technology />
        </Slide>
        <Zoom>
          <Talk />
        </Zoom>
        <Connect />
      </NextUIProvider>
    </div>
  );
}

export default App;
