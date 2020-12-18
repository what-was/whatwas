import React, { useState } from 'react';
import { ColorFilter } from '../../components';
import { BiCheck } from 'react-icons/bi';

export const AddColorContainer = (props) => {
  const [selectedColor, setSelectedColor] = useState(
    props.noteColor !== 'undefined' ? props.noteColor : 'default'
  );
  const colorList = [
    'default',
    'yellow',
    'orange',
    'blue',
    'pink',
    'green',
    'grey',
  ];

  const show = props.hasOpen ? true : false;
  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <ColorFilter.AddColorContainer
      hasOpen={show}
      id={props.id}
      currentContainer={props.currentContainer}
    >
      <ColorFilter.Tag darkmode="true">Color</ColorFilter.Tag>
      <ColorFilter.ColorPicker>
        {colorList.map((color) => (
          <ColorFilter.SingleColor key={color}>
            <ColorFilter.ColorButton
              type="radio"
              name={color}
              value={color}
              color={color}
              id={color}
              checked={selectedColor === color}
              onChange={() => {
                props.onChange(color);
                handleSelectedColor(color);
              }}
            />
            <ColorFilter.ColorLabel htmlFor={color}>
              <span>
                <BiCheck />
              </span>
            </ColorFilter.ColorLabel>
          </ColorFilter.SingleColor>
        ))}
      </ColorFilter.ColorPicker>
    </ColorFilter.AddColorContainer>
  );
};
