import React, {useContext} from "react";

import { DropDownContext } from "../DropDownContext";

export default function Input() {
  const { state, update } = useContext(DropDownContext);

  const inputChange = (e: Record<any, any>):void => {
    update({name: e.target.value, hideList: false});
  }

  const toogleList = ():void => {
    update({hideList: !state.hideList})
  }

  return (
    <div>
      <input
        autoComplete="off"
        pattern={"[a-zA-Z]{2,}"}
        aria-label="input"
        onClick={toogleList}
        onChange={inputChange}
        type="text"
        id="country-input"
        value={state.name}
        name="country"
        required={true}
        placeholder="Please type the country name or select from the list."
      />
    </div>
  );
}
