import TopBar from './components/NavBar/TopBar';
import PromotionBanner from './components/Header/PromotionBanner';
import SearchBar from './components/Header/SearchBar';
import ProductCategories from './components/Products/ProductCategories';
import BottomBar from './components/Footer/BottomBar';

function App() {
  return (
    <div className="flex flex-col bg-neutral-800 h-screen w-screen">
      <header>
        <TopBar />
        <PromotionBanner />
      </header>
      <main>
        <SearchBar />
        <ProductCategories />
      </main>
      <footer>
        <BottomBar />
      </footer>
    </div>
  );
}

export default App;
