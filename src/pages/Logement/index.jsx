import React from "react";
import "./logement.css";
import Carousel from "../../components/Carousel/carousel";
import Rating from "../../components/Rating";
import { useParams, Navigate } from "react-router-dom";
import Collapse from "../../components/Collapse/collapse";

function Logement() {
  //récuprération des données
  const data = require("../../logements.json");
  //identification du logment selectionné par id
  function getLogementWithId(data, logementId) {
    for (let logement of data) {
      if (logement.id === logementId) {
        return logement;
      }
    }
  }

  const { logementId } = useParams();
  const logement = getLogementWithId(data, logementId);

  //si logement existant retourne la fiche logement
  return (
    <main className="main_location">
      {logement ? (
        <section>
          <div className="carousel_location">
            <Carousel img={logement.pictures} />
          </div>

          <div className="location">
            <div className="location_header">
              <h2 className="location_header_title" key={"title" + logement.id}>
                {logement.title}
              </h2>
              <div
                className="location_header_city"
                key={"location" + logement.id}
              >
                {logement.location}
              </div>
              <ul className="location_header_tags">
                {logement.tags.map((tag) => (
                  <li className="location_header_tags_tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="location_host">
              <div id="host" className="location_host_info">
                <div className="host_name">{logement.host.name}</div>
                <img
                  className="host_picture"
                  src={logement.host.picture}
                  alt=""
                />
              </div>
              <div className="host_rating">
                <Rating rating={logement.rating} />
              </div>
            </div>
          </div>

          <div className="location_info">
            <div className="collapse_container">
              <Collapse title="Description" content={logement.description} />
            </div>
            <div className="collapse_container">
              <Collapse
                title="Equipement"
                content={
                  <ul>
                    {logement.equipments.map((equipment) => (
                      <li key={equipment}>{equipment}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        </section>
      ) : (
        //si logement inexistant retourne page error
        <Navigate replace to="../../components/Error" />
      )}
    </main>
  );
}
export default Logement;
