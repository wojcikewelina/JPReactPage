import React, {Component} from "react";
import { Link } from "react-router-dom";


class NavigationBar extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">
            <button className="nav-button">Home</button>
          </Link>
          <Link to="/termomodernizacja">
            <button className="nav-button">
              Program Termomodernizacji
            </button>
          </Link>
          <Link to="/oze">
            <button className="nav-button">
              OZE
            </button>
          </Link>
          <Link to="/pone">
            <button className="nav-button">
              Małe PONE
            </button>
          </Link>
        </nav>
      </header>
    )
  }
}

export default NavigationBar;
