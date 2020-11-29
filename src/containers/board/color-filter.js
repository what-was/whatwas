import React, { useState } from 'react';
import { ColorFilter } from '../../components';

export const ColorFilterContainer = (props) => {
  const [selectedColor, setSelectedColor] = useState('default');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const colorList = [
    'default',
    'yellow',
    'blue',
    'pink',
    'orange',
    'green',
    'grey',
  ];

  return (
    <ColorFilter>
      <ColorFilter.Tag>Filter by color:</ColorFilter.Tag>
      <ColorFilter.Button onClick={() => setDropdownOpen(!dropdownOpen)}>
        <ColorFilter.Color color={selectedColor} />
        <ColorFilter.Name>{selectedColor}</ColorFilter.Name>
      </ColorFilter.Button>
      {dropdownOpen && (
        <ColorFilter.Dropdown>
          <ColorFilter.Inner>
            {colorList.map((color) => (
              <ColorFilter.Item
                key={color}
                onClick={() => {
                  setSelectedColor(color);
                  setDropdownOpen(!dropdownOpen);
                  props.onClick(color);
                }}
              >
                <ColorFilter.Color color={color} />
                <ColorFilter.Name>{color}</ColorFilter.Name>
              </ColorFilter.Item>
            ))}
          </ColorFilter.Inner>
        </ColorFilter.Dropdown>
      )}
    </ColorFilter>
  );
};
