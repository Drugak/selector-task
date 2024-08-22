import React, {useContext, useMemo, useState} from "react";

import ListItem from "./ListItem";
import {DropDownContext} from "../DropDownContext";
import debounce from "../utils/debounce";

import type Country from "../types/Country";

type Props = {
  countryList: Country[];
}

export default function List({countryList}:Props) {
  const { state } = useContext(DropDownContext);
  const [filteredData, setFilteredData] = useState(countryList);

  const filteredDataFn = () => {
    const filteredResolve = countryList.filter((item: Country) =>
      item.name.toLowerCase()
        .includes(state.name.toLowerCase()));

    setFilteredData(filteredResolve);
  }
  const debounceFilter = debounce(filteredDataFn, 500);

  useMemo(() => {
    debounceFilter();
  }, [state.name]);

  return (
    <div className="list">
      {!state.hideList &&
        (<div>
          {filteredData && filteredData.map((item: Country) => <ListItem key={item.name} item={item}/>)}
        </div>)
      }
    </div>
  );
}
