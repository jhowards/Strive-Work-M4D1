import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      
      
      <MyNav />
      <Container fluid className="px-5">
      <Welcome />
      <LatestRelease />
      </Container> 
      <MyFooter />
    
    </div>
  );
}

export default App;
