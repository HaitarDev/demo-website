import "./App.css";
import { PageProvider } from "./context/PageContext";
import { ProgressProvider } from "./context/ProgressContext";
import Navbar from "./sections/Navbar";

import SectionOne from "./sections/SectionOne";

function App() {
  return (
    <ProgressProvider>
      <PageProvider>
        <Navbar />
        <SectionOne />
      </PageProvider>
    </ProgressProvider>
  );
}

export default App;
