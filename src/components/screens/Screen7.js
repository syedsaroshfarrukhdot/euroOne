import React from "react";
import { Link } from "react-router-dom";
function Default() {
  return (
    <div className="container mb-5 step6 d-flex flex-column  justify-content-center align-items-center">
      <h4 style={{ fontWeight: 400 }}>
        Wie ist <strong>Ihr Geburtsdatum?</strong>
        <br />
      </h4>

      <main className="row default_wrapper">
        <section>
          <input type="text" placeholder="DD" />
          <input type="text" placeholder="MM" />
          <input type="text" placeholder="JJJJ" />
        </section>
        <Link style={{ margin: "0 10px", width: "100%" }} to="/Step2">
          <button>
            <i class="fas fa-angle-right" aria-hidden="true"></i> WEITER
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Default;
