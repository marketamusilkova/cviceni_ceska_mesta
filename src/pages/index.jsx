import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Mesto } from '../components/City';
import { cities } from '../cz-cities.js';

document.querySelector('#root').innerHTML = render(
  <>
    {cities.map((mesto) => (
      <Mesto key={mesto.name} nazevMesta={mesto.name} pocetObyvatel={mesto.population} rozloha={mesto.area} okres={mesto.district} obrazek={mesto.photo} />
    ))}
  </>,
);



// Založte si Vite/JSX projekt:
// npm init kodim-app@latest cviceni-ceska-mesta jsx
// Do souboru index.jsx vložte mimo komponentu pole s názvy deseti největších českých měst.
// const cities = [
//   'Praha',
//   'Brno',
//   'Ostrava',
//   'Plzeň',
//   'Liberec',
//   'Olomouc',
//   'České Budějovice',
//   'Hradec Králové',
//   'Ústí nad Labem',
//   'Pardubice',
// ];
// Vytvořte pole cities a pomocí funkce map z něj vyrobte pole JSX elementů. Každý JSX element nechť má následující strukturu.
// <div className="city">Název města</div>
// Výsledné pole uložte do proměnné cityElements.
// Použijte pole cityElements uvnitř komponenty JSX a zobrazte jej tak na vaší stránce.
// Zbavte se proměnné cityElements a funkci map použijte přímo uvnitř komponenty JSX.
// V konzoli si JSX bude stěžovat, že chybí key prop. Máme však štěstí, jména měst jsou unikátní. Můžeme tak na náš div přídat prop key a do něj poslat přímo název města.

// Pokračujte v projektu z předchozího příkladu.

// Do pole cities si uložte obsáhlejší data o českých městech.
// const cities = [
//   {
//     name: 'Praha',
//     population: 1324277,
//     area: 496.21,
//   },
//   {
//     name: 'Brno',
//     population: 381346,
//     area: 230.18,
//   },
//   {
//     name: 'Ostrava',
//     population: 287968,
//     area: 214.23,
//   },
//   {
//     name: 'Plzeň',
//     population: 174842,
//     area: 137.67,
//   },
//   {
//     name: 'Liberec',
//     population: 104802,
//     area: 106.09,
//   },
//   {
//     name: 'Olomouc',
//     population: 100663,
//     area: 103.33,
//   },
//   {
//     name: 'České Budějovice',
//     population: 94463,
//     area: 55.6,
//   },
//   {
//     name: 'Hradec Králové',
//     population: 92939,
//     area: 105.69,
//   },
//   {
//     name: 'Ústí nad Labem',
//     population: 92716,
//     area: 93.97,
//   },
//   {
//     name: 'Pardubice',
//     population: 91727,
//     area: 82.66,
//   },
// ];
// Upravte kód vaší aplikace tak, aby u každého města zobrazoval kromě názvu také počet obyvatel a rozlohu v kilometrech.
// Jako key prop opět použijte název města.
// Vytvořte komponentu City, jejímž úkolem bude zobrazovat jedno město. Tato komponenta bude mít props name, population a area. Použijte komponentu k zobrazení každého města ze seznamu.
// Pro komponentu City vytvořte vlastní složku a komponentu malinko nastylujte, aby vypadala hezky.


// Pokračujte v projektu Česká města z předchozího příkladu.

// Ve složce src vašeho projektu si vytvořte prázdný soubor cz-cities.js.
// Do tohoto souboru zkopírujet obsah souboru cz-cities.js z GitHubu. Soubor obsahuje seznam všech českých měst aktuální k 1. lednu 2020.
// Smažte pole cities ve vašem index.jsx a místo něj si imporujte pole cities ze souboru cz-cities.js. Už v tuto chvíli by měl váš projekt fungovat jako v přechozím příkladu. Pouze na stránce uvidíte mnohem více měst než před tím.
// Upravte komponentu City tak, aby zobrazovala také okres, do kterého dané město patří.
// U každého města je odkaz na fotografii z daného města. Do vaší komponenty City přidejte element img a zobrazte u kažého města také jeho obrázek. Opět si můžete malinko pohrát se styly, aby stránka vypadala hezky.
