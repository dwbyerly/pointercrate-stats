import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/devices" element={<Home />} />
        <Route path="/add-device" element={<AddDevice />} />

      </Routes>
    </Router>
  );
}

export default App;
