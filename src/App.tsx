import { CarouselPlaces } from "./components/CarouselPlaces";
import { Icons } from "./components/Icons";
import Places from "./components/Places";
import { TabelaUserRate } from "./components/TabelaUserRate.tsx";
import { places } from "./data/places";
import { userRate } from "./data/userRate.ts";
import { greetings, shortTime } from "./util/shortTime.ts";

export default function App() {
  const listPlace = places.map((place) => <li>{place.name}</li>);
  const listPlaceObject = places.map((place) => (
    <li style={{ listStyle: "none" }}>
      <Places
        key={place.id}
        imagem={place.src}
        name={place.name}
        description={place.local}
      />
    </li>
  ));

  const listPlaceIcons = places.map((place) => (
    <li style={{ listStyle: "none" }}>
      <Icons key={place.id} imagem={place.src} name={place.name} />
    </li>
  ));

  return (
    <div style={{}}>
      <header
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <h2>Role Aleatorio</h2>
        <p>{`${shortTime()} - ${greetings()}`}</p>
      </header>
      <ul style={{ display: "flex" }}>{listPlaceIcons}</ul>
      <hr />
      <ul>{listPlace}</ul>
      {/* <img src="../src/assets/pexels-jaralol-17404200.jpg" alt="imagem place" /> */}
      {/* <Icons imagem="../src/assets/paulista.jpg" name="Sao Paulo" />
      <Icons imagem="../src/assets/pexels-jaralol-17404200.jpg" /> */}
      {/* <hr /> */}
      <CarouselPlaces places={places} />
      <hr />

      <ul style={{ display: "flex", flexWrap: "wrap" }}>{listPlaceObject}</ul>

      <hr />
      <TabelaUserRate userRates={userRate} />
      <hr />
    </div>
  );
}
