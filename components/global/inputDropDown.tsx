import Select from 'react-select'
import React, { useEffect, useMemo, useState } from "react";
// import dropdownFunction from "../../../utilities/dropdownFunction";
interface PropsType {
  className: string
  options: OptionsType[]
  value: OptionsType
}
interface OptionsType {
  value: string
  label: string
}
const InputDropdown = React.forwardRef((props: any, ref: any) => {

  const {
    className,
    options,
    value: value,
    // sortKey = 'label', //key of option object
    // sortType = 'String', //String or Number
    // isClearable,
  } = props;
  // console.log("🚀 ~ file: inputDropDown.tsx ~ line 24 ~ InputDropdown ~ dropdownValue", dropdownValue)
  //this portion resolve asynchronous loading of option problem
  const [localValue, setLocalValue] = useState<OptionsType>(value);
  // useEffect(() => {
  //   if (dropdownValue && options) {
  //     if (Array.isArray(dropdownValue)) {
  //       setLocalValue(dropdownValue.map(value => options.find(option => option.value === value.value)))
  //     } else {
  //       setLocalValue(options.find(option => option.value === dropdownValue.value))
  //     }
  //   }
  //   else {
  //     setLocalValue(null);
  //   }
  // }, [dropdownValue, options])

  // const sortedOption = useMemo(() => dropdownFunction.sortOption(options, sortType, sortKey), [options])

  return (
    <Select
      isSearchable={false}
      // menuPortalTarget={document.querySelector("#react-select-portal")}
      // isMulti={false}
      {...props}
      // ref={ref}
      value={localValue}
      // options={s ? s : []}
      // components={{
      //   ...(!isClearable ? { IndicatorSeparator: () => null } : {}),
      // }}
      // theme={(theme) => ({
      //   ...theme,
      //   borderRadius: 0,
      //   colors: {
      //   ...theme.colors,
      //     text: 'orangered',
      //     primary25: 'hotpink',
      //     primary: 'black',
      //   },
      // })}
      className={`react-select-container ${className ? className : ""}`}
      classNamePrefix="react-select"

    />
  );
});
export default InputDropdown;