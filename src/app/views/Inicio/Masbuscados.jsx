import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure, Hits } from 'react-instantsearch-dom';
import {
  Link,
} from "react-router-dom";

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const Hit = ({ hit }) => ( 

  <p> <Link to={`/${hit.objectID}`}> {hit.name} {hit.brand} </Link> </p>
);

const Masbuscados = () => (

  <InstantSearch 
    indexName="instant_search" 
    searchClient={searchClient}>

    <Configure
      hitsPerPage={4}
      analytics={false}
      enablePersonalization={true}
      distinct
    />

    <h3>Princiaples Busquedas</h3>

    <Hits hitComponent={Hit} /> 
    
  </InstantSearch>
);

export default Masbuscados;
