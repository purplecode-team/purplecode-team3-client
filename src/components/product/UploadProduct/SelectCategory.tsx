import React from "react";
import Select from "react-select";

interface CategoryProps {
  category: number | null;
  onChangeCategory: (value: number) => void;
}
type CategoryOption = { value: number; label: string };
const options = [
  { value: 0, label: "영상가전" },
  { value: 1, label: "주방가전" },
  { value: 2, label: "생활가전" },
  { value: 3, label: "노트북/PC" },
  { value: 4, label: "카메라" },
  { value: 5, label: "음향기기" },
  { value: 6, label: "모바일/테블릿" },
  { value: 7, label: "게임" },
];

function SelectCategory({ category, onChangeCategory }: CategoryProps) {
  return (
    <Select
      placeholder="카테고리"
      value={options.find((opt: CategoryOption) => opt.value === category)}
      onChange={(selected) => {
        if (!selected) return;
        onChangeCategory(selected.value);
      }}
      options={options}
      isSearchable={false}
      styles={{
        placeholder: (provided) => ({
          ...provided,
          fontWeight: "bold",
          left: "0",
          fontSize: "1rem",
        }),
        menu: (provided) => ({
          ...provided,
          color: "#838383",
        }),
        control: (base) => ({
          ...base,
          boxShadow: "none",
          border: "none",
          margin: "0px",
        }),
        singleValue: (styles) => ({
          ...styles,
          color: "#838383",
          fontWeight: "bold",
          left: "0",
        }),
      }}
    />
  );
}

export default SelectCategory;
