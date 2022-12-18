import { Blockquote, Checkbox, List, Text, Title } from '@mantine/core';
import { Transforms } from 'slate';
import { ReactEditor, useReadOnly, useSlateStatic } from 'slate-react';
import type { RenderElementProps } from 'slate-react';
import type { Element as SlateElement } from 'slate';
import type { CheckListItemElementProps, ElementProps } from './editor.types';

export const Element = (props: RenderElementProps) => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case 'block-quote':
      return <Blockquote {...attributes}>{children}</Blockquote>;
    case 'heading-one':
      return (
        <Title order={1} {...attributes}>
          {children}
        </Title>
      );
    case 'heading-two':
      return (
        <Title order={2} {...attributes}>
          {children}
        </Title>
      );
    case 'heading-three':
      return (
        <Title order={3} {...attributes}>
          {children}
        </Title>
      );
    case 'heading-four':
      return (
        <Title order={4} {...attributes}>
          {children}
        </Title>
      );
    case 'heading-five':
      return (
        <Title order={5} {...attributes}>
          {children}
        </Title>
      );
    case 'heading-six':
      return (
        <Title order={6} {...attributes}>
          {children}
        </Title>
      );
    case 'bulleted-list':
      return (
        <List listStyleType="disc" {...attributes}>
          {children}
        </List>
      );
    case 'list-item':
      return <List.Item {...attributes}>{children}</List.Item>;

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
      label={
        <Text
          contentEditable={!readOnly}
          suppressContentEditableWarning
          td={checked ? 'line-through' : undefined}
        >
          {children}
        </Text>
      }
    />
  );
};
