import React from 'react';
import {
  Container,
  Button,
  Dropdown,
  Inner,
  Item,
  Name,
  Color,
  Tag,
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
