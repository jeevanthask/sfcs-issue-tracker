import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import "primereact/resources/themes/saga-purple/theme.css";

function App() {
  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-md-12">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
