import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </Layout>
  );
}

export default App;
