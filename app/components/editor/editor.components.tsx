import { Checkbox, List, ListItem, Text } from '@chakra-ui/react';
import { Transforms } from 'slate';
import { ReactEditor, useReadOnly, useSlateStatic } from 'slate-react';
import type { RenderElementProps } from 'slate-react';
import type { Element as SlateElement } from 'slate';
import type { CheckListItemElementProps, ElementProps } from './editor.types';

export const Element = (props: RenderElementProps) => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case 'heading-one':
      return (
        <Text as="h1" {...attributes}>
          {children}
        </Text>
      );
    case 'heading-two':
      return (
        <Text as="h2" {...attributes}>
          {children}
        </Text>
      );
    case 'heading-three':
      return (
        <Text as="h3" {...attributes}>
          {children}
        </Text>
      );
    case 'heading-four':
      return (
        <Text as="h4" {...attributes}>
          {children}
        </Text>
      );
    case 'heading-five':
      return (
        <Text as="h5" {...attributes}>
          {children}
        </Text>
      );
    case 'heading-six':
      return (
        <Text as="h6" {...attributes}>
          {children}
        </Text>
      );
    case 'bulleted-list':
      return (
        <List listStyleType="disc" {...attributes}>
          {children}
        </List>
      );
    case 'list-item':
      return <ListItem {...attributes}>{children}</ListItem>;

    case 'check-list-item':
      return <CheckListItemElement {...props} />;
    default:
      return <Text {...attributes}>{children}</Text>;
  }
};

export const CheckListItemElement = (props: ElementProps) => {
  const { attributes, children, element } = props;

  const editor = useSlateStatic();
  const readOnly = useReadOnly();
  const { checked } = element as CheckListItemElementProps;

  return (
    <Checkbox
      {...attributes}
      checked={checked}
      onChange={(event) => {
        const path = ReactEditor.findPath(editor, element);
        const newProperties: Partial<SlateElement> = {
          checked: event.target.checked,
        };
        Transforms.setNodes(editor, newProperties, { at: path });
      }}
      children={
        <Text
          contentEditable={!readOnly}
          suppressContentEditableWarning
          textDecoration={checked ? 'line-through' : undefined}
        >
          {children}
        </Text>
      }
    />
  );
};
