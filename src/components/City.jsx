import './City.css';

export const Mesto = ({
  nazevMesta,
  pocetObyvatel,
  rozloha,
  okres,
  obrazek,
}) => (
  <>
    <div className="city">
      {nazevMesta}, počet obyvatel: {pocetObyvatel}, rozloha: {rozloha} km2, {okres}
    </div>
    <img src={obrazek}></img>
  </>
);
