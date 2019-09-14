import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./extra/main.css";

class Terms extends Component {
  render() {
    return (
      <div className="page-wrap">
        <nav id="nav">
          <ul>
            <li>
              <a href="/" className="active">
                <span className="icon fa-cloud" />
              </a>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/blog",
                  state: {
                    redirectPath: "http://blog.pureairindustries.com",
                    redirectToTitle:
                      "You are being redirected to Pure Air Industries' Blog - enjoy :)"
                  }
                }}
              >
                <span className="icon fa-file-text-o" />
              </Link>
            </li>
            <li>
              <a href="/funding">
                <span className="icon fa-dollar" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://air-pollution-eradication.mn.co/"
              >
                <span className="icon fa-users" />
              </a>
            </li>
          </ul>
        </nav>

        <section id="main">
          <header id="header">
            <span className="pull-left">Terms of Service</span>
          </header>

          <section>
            <div className="inner col-xs-6 col-md-6 col-md-offset-3 col-xs-offset-3 blog">
              <header>
                <h1 className="text-center">Terms of Service</h1>
              </header>

              <p />
            </div>
          </section>

          <div className="row">
            <div className="col-md-12 col-xs-18">
              <footer id="footer">
                <div className="copyright">
                  &copy; 2018 <a href="/">Pure Air Industries</a>.
                </div>
              </footer>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Terms;
