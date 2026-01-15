import { useState, useEffect } from "react";
import { Link } from "react-router";
import { PokeAPI } from "./api"; // This links to your api.ts file

interface Props {
  id: number;
  image: string;
  name: string;
  types: string[];
}

const Card: React.FC<Props> = (props) => (
  <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-5 w-64 flex flex-col gap-4">
    <h4 className="text-xl text-gray-900 font-bold capitalize">{props.name} - {props.id}</h4>
    <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center overflow-hidden">
      <img src={props.image} alt={props.name} className="w-full h-full object-contain" />
    </div>
    <div className="flex justify-end mt-2">
      {props.types.map(t => <span key={t} className="bg-green-500 text-white px-3 py-1 rounded text-xs font-bold uppercase">{t}</span>)}
    </div>
  </div>
);

export function Root() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    PokeAPI.listPokemons().then((response) => {
      const formattedData = response.results.map((item: any, idx: number) => ({
        id: idx + 1,
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 1}.png`
      }));
      setPokemons(formattedData);
    });
  }, []);

  return (
    <div className="p-10 flex flex-wrap gap-6 justify-center">
      {pokemons.map((p) => (
        <Link key={p.id} to={`/detail/${p.id}`}>
          <Card id={p.id} name={p.name} image={p.image} types={["grass"]} />
        </Link>
      ))}
    </div>
  );
}