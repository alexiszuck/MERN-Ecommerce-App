import TopBar from './components/NavBar/TopBar'
import Header from './components/Header/Header';
import ProductCategories from './components/Products/ProductCategories'
import BottomBar from './components/Footer/BottomBar'

function App() {
  return (
    <div className="flex flex-col bg-neutral-800 h-screen w-screen">
      <header>
        <TopBar />

      </header>
      <main>
        <Header />
        <ProductCategories />
      </main>
      <footer>
        <BottomBar />
      </footer>
    </div>
  );
}

export default App;
