
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Cart from './Component/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
