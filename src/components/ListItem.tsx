import React, {memo, useContext} from "react";
import {DropDownContext} from "../DropDownContext";
import type Country from "../types/Country";

type Props = {
  item: Country;
  key: string;
}

const ListItem = memo(function ListItem({item}: Props) {
  const { state, update } = useContext(DropDownContext);

  const highlightMatches = (name: string) => {
    const substring = new RegExp(state.name, "gi");
    const original = name;

    return original.replace(substring, (match) => `<span class="highlight-matches">${match}</span>`);
  }
  const handleImgLoadingError = (e: React.ChangeEvent<any>) => (e.target.src = 'https://assets.codepen.io/148866/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1666958116&width=256');

  return (
    <div className="list-item" onClick={() => update({name: item.name, hideList: true})}>
      <img
        src={item.flag}
        alt={item.name}
        width="50px"
        height="30px"
        onError={(e) => handleImgLoadingError(e)}
      />
      {state.name.length > 0 ? <span dangerouslySetInnerHTML={{__html: highlightMatches(item.name)}}/> : <span>{item.name}</span>}
    </div>
  );
});

export default ListItem;
