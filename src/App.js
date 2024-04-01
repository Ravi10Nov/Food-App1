import { Outlet } from 'react-router-dom';
import About from './About';
import './App.css';
import Header from './Header';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}



export default App;
