import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { PlaceType } from "../types/PlaceType";
import Places from "./Places";

type PlaceProps = {
  places: PlaceType[];
};

export function CarouselPlaces({ places }: PlaceProps) {
  console.log(places);

  const listPlace = places.map((place) => (
    <Carousel.Item>
      <h4>{place.name}</h4>
      <Places
        key={place.id}
        imagem={place.src}
        name={place.name}
        description={place.local}
      />
    </Carousel.Item>
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 30,
        }}
      >
        <h4></h4>
        <Carousel>{listPlace}</Carousel>
      </div>
    </>
  );
}
