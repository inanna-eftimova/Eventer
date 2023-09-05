import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Footer from "./components/Footer/Footer";
import CatalogEvents from "./components/Events/CatalogEvents/CatalogEvents";

function App() {
  return (
    <div id="wrapper">
    <Header/>

      <main>
        
        <Welcome/>

      </main>
    <Footer/>
    </div>
  );
}

export default App;
