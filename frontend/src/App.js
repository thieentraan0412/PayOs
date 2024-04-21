import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Product from "./component/Product";
import PaySuccess from "./component/PaySuccess";
import PayFail from "./component/PayFail";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/pay_success" element={<PaySuccess />} />
          <Route path="/pay_fail" element={<PayFail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
