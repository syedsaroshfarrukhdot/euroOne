import { Link } from "react-router-dom";
import React, { useState } from "react";
function Screen2() {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(true);
  return (
    <div className="container mb-5  d-flex flex-column  justify-content-center align-items-center">
      <h4 style={{ fontWeight: 400 }}>
        <strong>Zur Hausrat</strong>
        <h4>wählten 89% aller Kunden auch..</h4>
      </h4>

      <main className="row default_wrapper">
        <div
          onClick={() => setClicked1(!clicked1)}
          className={
            clicked1
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <i class="fas fa-home" aria-hidden="true"></i>
          <h3>
            Hausrat- <br />
            versicherung
          </h3>
        </div>
        <div
          onClick={() => setClicked2(!clicked2)}
          className={
            clicked2
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <i class="fas fa-user-shield" aria-hidden="true"></i>
          <h3>
            Privathaftpflicht- <br />
            versicherung
          </h3>
        </div>

        <p>
          <strong>Kombi-Tarife</strong> bieten deutlich{" "}
          <strong>mehr Leistung zu geringeren Kosten</strong>.
        </p>
        <Link style={{ margin: "0 10px", width: "100%" }} to="/Step4">
          <button>
            <i class="fas fa-angle-right" aria-hidden="true"></i> WEITER
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Screen2;
