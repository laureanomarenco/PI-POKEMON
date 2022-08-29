import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Home from "./components/home/home";

test("renders the app", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/laureano marenco/i);
  expect(linkElement).toBeInTheDocument();
});
