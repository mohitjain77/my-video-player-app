import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;
