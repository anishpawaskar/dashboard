import "./App.css";
import { Dashboard } from "./components/dashboard/dashboard";
import { Sidebar } from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="h-screen flex bg-background text-foreground">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
