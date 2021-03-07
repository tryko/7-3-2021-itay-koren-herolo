import React, { useEffect, useState } from "react";
import { Switch } from "@chakra-ui/react";

const SwitchBtn = ({
  leftTxt,
  rightTxt,
  defaultValue,
  switchValue,
  toggle,
}) => {
  const [activeValue, setActiveValue] = useState(defaultValue);

  const handleToggle = (e) => {
    setActiveValue((prevValue) => {
      let selectedVal = undefined;
      if (prevValue === defaultValue) {
        selectedVal = switchValue;
      } else {
        selectedVal = defaultValue;
      }
      toggle(selectedVal);
      return selectedVal;
    });
  };

  return (
    <div>
      {leftTxt} <Switch size="sm" onChange={handleToggle} value={activeValue} />{" "}
      {rightTxt}
    </div>
  );
};

export default SwitchBtn;
