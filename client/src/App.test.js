import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from './store/index'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './components/home/home'
import axios from "axios";

if(typeof process != 'undefined') {
  axios.defaults.adapter = require('axios/lib/adapters/http')
}

test("renders the app", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/laureano marenco/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Home", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = screen.getByText(/page/i);
  expect(linkElement).toBeInTheDocument();
});

test("api is running", async () => {
  let response = await axios.get('http://localhost:3001/api/pokemons')
  let responseData = response.data;

  expect(responseData[0].name).toBe('bulbasaur')
});