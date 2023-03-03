import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
////////////////////////////
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

export const queryState = atom({
  key: "queryState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

///

//////////////////////
export const resultState = selector({
  key: "resultState", // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    const valorDeQuery = get(queryState);
    if (valorDeQuery) {
      const busquedaMeLi = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery
      );

      const data = await busquedaMeLi.json();

      return data.results;
    } else {
      //este eslse es para que la primera vez la cual no tiene anda que retornar retorne un array vacio
      return [];
    }
  },
});

/////////////////////////////
export function useSearchResults() {
  const params = useParams();
  const [value, setQueryValue] = useRecoilState(queryState);
  const query = params.query;
  const results = useRecoilValue(resultState);

  console.log("log del Result desde el hook", results);
  ///este useEffect execut el setqueryValue passandole la query cada vez que cambie la query de los params
  useEffect(() => {
    if (query) {
      setQueryValue(query);
    }
  }, [query]);
  ////////////////////////
  return results;
}
