export interface PokemonsListResponse {
  count:    number;
  next?:     string;
  previous?: string;
  results:  SmallPokemom[];
}

export interface SmallPokemom {
  id:   number;
  name: string;
  img:  string;
  url:  string;
}
