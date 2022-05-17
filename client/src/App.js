import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ProductCategories from './components/Products/ProductCategories';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col bg-mern-dark">

      <NavBar />
      <Header />
      <ProductCategories />
      <Footer />
    </div>
  );
}

export default App;
