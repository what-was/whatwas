import React from 'react';
import {
  Container,
  AddColorContainer,
  Button,
  Dropdown,
  Inner,
  Item,
  Name,
  Color,
  Tag,
  ColorPicker,
  SingleColor,
  ColorButton,
  ColorLabel,
} from './styles/color-filter';

export default function ColorFilter({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ColorFilter.Button = function ColorFilterButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

ColorFilter.Dropdown = function ColorFilterDropdown({
  children,
  ...restProps
}) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
ColorFilter.Inner = function ColorFilterInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

ColorFilter.Item = function ColorFilterItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

ColorFilter.Name = function ColorFilterName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

ColorFilter.Color = function ColorFilterColor({ children, ...restProps }) {
  return <Color {...restProps}>{children}</Color>;
};

ColorFilter.Tag = function ColorFilterTag({ children, ...restProps }) {
  return <Tag {...restProps}>{children}</Tag>;
};

ColorFilter.AddColorContainer = function ColorFilterAddColorContainer({
  children,
  ...restProps
}) {
  return <AddColorContainer {...restProps}>{children}</AddColorContainer>;
};
ColorFilter.ColorPicker = function ColorFilterColorPicker({
  children,
  ...restProps
}) {
  return <ColorPicker {...restProps}>{children}</ColorPicker>;
};

ColorFilter.SingleColor = function ColorFilterSingleColor({
  children,
  ...restProps
}) {
  return <SingleColor {...restProps}>{children}</SingleColor>;
};

ColorFilter.ColorButton = function ColorFilterColorButton({
  children,
  ...restProps
}) {
  return <ColorButton {...restProps}>{children}</ColorButton>;
};

ColorFilter.ColorLabel = function ColorFilterColorLabel({
  children,
  ...restProps
}) {
  return <ColorLabel {...restProps}>{children}</ColorLabel>;
};
