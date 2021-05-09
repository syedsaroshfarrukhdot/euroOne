import map from "../images/67663.png";
function Map() {
  return (
    <div className="container map_wrapper">
      <p className="text-center">
        <i className="fas fa-lock mr-1" aria-hidden="true"></i>
        Ihre Daten werden vertraulich behandelt und nicht an Dritte
        weitergegeben.
      </p>
      <section className="map_container d-flex">
        <img className="mr-2" src={map} alt="" />
        <div>
          <span style={{ fontSize: "15px" }}>
            <strong>Ruzena</strong> aus <strong>Berlin</strong>,
            <br />
            einer von 125 Neukunden heute. <br />
          </span>
          <span style={{ fontSize: "13px" }}>
            Abschluss Privathaftpflicht, Hausrat und Rechtsschutz vor 7 Minuten
          </span>{" "}
          <br />
          <span style={{ fontSize: "10px" }}>
            <i class="fas fa-check-circle" aria-hidden="true"></i> geprüft von
            <span style={{ color: "#060" }}> TrustedVersicherung</span>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Map;
