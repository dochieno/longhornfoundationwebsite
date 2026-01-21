import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./layout/SiteLayout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Programs from "./pages/Programs.jsx";
import Governance from "./pages/Governance.jsx";
import Policies from "./pages/Policies.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
