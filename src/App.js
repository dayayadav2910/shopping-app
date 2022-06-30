import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from 'react-bootstrap';
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header></Header>
     <main className="py-3">
        <Container>
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            </Routes>
          <Routes>
            <Route path='/product/:id' element={<ProductScreen></ProductScreen>}></Route>
          </Routes>   
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
