import { useStore } from './store/useStore';
import { Header } from './components/Header';
import { DemoPanel } from './components/DemoPanel';
import { BrowseScreen } from './components/BrowseScreen';
import { CartScreen } from './components/CartScreen';
import { OptimizerScreen } from './components/OptimizerScreen';
import { Toast } from './components/Toast';

function App() {
  const { screen } = useStore();

  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <DemoPanel />
      <main className="flex-1 flex flex-col min-h-0">
        {screen === 'browse' && <BrowseScreen />}
        {screen === 'cart' && <CartScreen />}
        {screen === 'optimizer' && <OptimizerScreen />}
      </main>
      <Toast />
    </div>
  );
}

export default App;
