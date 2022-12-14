import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Work from './components/work/work';
import PortfolioNav from './nav-bar/nav-bar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row } from 'react-bootstrap';
// implement routing to only show one component at a time

function App() {
  return (
    <div>
      <PortfolioNav />

      <Container className="app">
        <Tabs defaultActiveKey={'about'} className="mb-3">
          <Tab eventKey={'about'} title="About">
            <Row>
              <About />
            </Row>
          </Tab>
          <Tab eventKey={'work'} title="My Work">
            <Work />
          </Tab>
          <Tab eventKey={'contact'} title="Contact Me">
            <Contact />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;
