import { Container } from "react-bootstrap";
import "./App.css";
import { SidePanel } from "./components/SidePanel";

function App() {
  return (
    <Container>
      <header className="App-header">
        <SidePanel />
      </header>
    </Container>
  );
}

export default App;
