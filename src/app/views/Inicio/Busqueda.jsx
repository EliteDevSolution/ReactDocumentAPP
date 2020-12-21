import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Index, Configure } from "react-instantsearch-dom";
import AutoComplete from "./Autocomplete";
import "./App.scss";

import Recientes from "./Recientes";
import Masbuscados from "./Masbuscados";
import { useHistory } from "react-router-dom";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

const Busqueda = () => {
  const history = useHistory();

  return (
    <div>
      <InstantSearch indexName="instant_search" searchClient={searchClient}>
        <h1>LYBRE</h1>

        <Configure hitsPerPage={4} clickAnalytics />
        <AutoComplete
          onSuggestionSelected={(event, { suggestion, suggestionValue }) => {
            console.log("Suggestion:", suggestion);
            console.log("Suggestion value:", suggestionValue);
            console.log("Norma Seleccionada:", suggestion.objectID);
            history.push(`/documento/${suggestion.objectID}`);
            event.stopPropagation();
          }}
        />

        <Index indexName="instant_search" />
        <Index indexName="instant_search_price_desc" />
      </InstantSearch>

      <Recientes />
      <Masbuscados />
    </div>
  );
};

export default Busqueda;
