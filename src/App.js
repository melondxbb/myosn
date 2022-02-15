import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Account from "./components/Account/Account";
import Bills from "./components/Bills/Bills";
import Packs from "./components/Packs/Packs";
import Support from "./components/Support/Support";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/packs" element={<Packs />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      
    </Layout>
  );
}

export default App;
