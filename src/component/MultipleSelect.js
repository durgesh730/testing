import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelect = ({ options, selectedValues, onChange, label }) => {
  return (
    <Select
      labelId={`${label}`}
      id={`${label}`}
      value={selectedValues}
      onChange={onChange}
      defaultValue={selectedValues}
      MenuProps={MenuProps}
      hiddenLabel
      fullWidth
      size='small'
      sx={{ backgroundColor: "white" }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.name}
          value={option.name}
        >
          {option.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MultipleSelect;
