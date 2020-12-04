import React, { useState, useEffect, useRef } from 'react';
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

  // Ref for color filter dropdown
  let container = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  // Handle modal click outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <ColorFilter>
      <ColorFilter.Tag>Filter by color:</ColorFilter.Tag>
      <ColorFilter.Button onClick={() => setDropdownOpen(!dropdownOpen)}>
        <ColorFilter.Color color={selectedColor} />
        <ColorFilter.Name>{selectedColor}</ColorFilter.Name>
      </ColorFilter.Button>
      {dropdownOpen && (
        <aside ref={container}>
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
        </aside>
      )}
    </ColorFilter>
  );
};
