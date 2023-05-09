import logo from './logo.svg';
import './App.css';
import PageOne from './page/PageOne';
import bootstrap, { Container } from 'react-bootstrap'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Container className="App">
      <PageOne/>
    </Container>
  );
}

export default App;
