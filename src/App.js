import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Account from "./components/Account/Account";
import Bills from "./components/Bills/Bills";
import Packs from "./components/Packs/Packs";
import Support from "./components/Support/Support";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        } />
        <Route path="/bills" element={
          <PrivateRoute>
            <Bills />
          </PrivateRoute>
        } />
        <Route path="/packs" element={
          <PrivateRoute>
            <Packs />
          </PrivateRoute>
        } />
        <Route path="/support" element={
          <PrivateRoute>
            <Support />
          </PrivateRoute>
        } />
      </Routes>
      
    </Layout>
  );
}

export default App;
