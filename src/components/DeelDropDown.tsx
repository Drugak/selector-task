import React from 'react';
import { useState, useEffect } from 'react'

import Input from "./Input";
import List from "./List";
import { DropDownContextProvider } from "../DropDownContext";
import fetcher from "../utils/fetcher";
import type Country from "../types/Country";
import ErrorBoundary from "./ErrorBoundary";

function Layout() {
  const [response, setResponse] = useState<Country[] | null>(null);

  useEffect(() => {
    const dataFetch = async () => {
      const data: Country[] = await fetcher("https://restcountries.com/v2/all");
      setResponse(data);
    };

    dataFetch();
  }, []);

  return (
    <div id="deel-drop-down">
      <DropDownContextProvider>
        <Input/>
        {response && <List countryList={response}/>}
      </DropDownContextProvider>
    </div>
  );
}

export default function DeelDropDown() {
  return (
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  );
}
