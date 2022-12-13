import React from "react";
import BannerHome from "../../assets/bannerHome.png";
import LocationList from "../../components/LocationList";
import "./Home.css";

export default function Home() {
  return (
    <main className="main-home">
      <article className="banner">
        <img
          className="banner_img"
          src={BannerHome}
          alt="Chez vous, partout et ailleurs"
        />
        <h2 className="banner_title">Chez vous, partout et ailleurs</h2>
      </article>
      <LocationList></LocationList>
    </main>
  );
}
