import { useCallback, useMemo } from 'react';
import { createEditor, Editor as SlateEditor, Node as SlateNode } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';
import { SHORTCUTS, withChecklists, withShortcuts } from './editor.middlewares';
import { Element } from './editor.components';
import { defaultValue } from './editor.mocks';
import type { EditorProps, RenderElement } from './editor.types';

export const Editor = (props: EditorProps) => {
  const { initialValue = defaultValue } = props;

  const renderElement: RenderElement = useCallback(
    (elementProps) => <Element {...elementProps} />,
    [],
  );

  const editor = useMemo(
    () => withChecklists(withShortcuts(withReact(withHistory(createEditor())))),
    [],
  );

  const handleDOMBeforeInput = (e: InputEvent) => {
    queueMicrotask(() => {
      const pendingDiffs = ReactEditor.androidPendingDiffs(editor);

      const scheduleFlush = pendingDiffs?.some(({ diff, path }) => {
        if (!diff.text.endsWith(' ')) {
          return false;
        }

        const { text } = SlateNode.leaf(editor, path);
        const beforeText = text.slice(0, diff.start) + diff.text.slice(0, -1);
        if (!(beforeText in SHORTCUTS)) {
          return false;
        }

        const blockEntry = SlateEditor.above(editor, {
          at: path,
          match: (n) => SlateEditor.isBlock(editor, n),
        });
        if (!blockEntry) {
          return false;
        }

        const [, blockPath] = blockEntry;
        return SlateEditor.isStart(
          editor,
          SlateEditor.start(editor, path),
          blockPath,
        );
      });

      if (scheduleFlush) {
        ReactEditor.androidScheduleFlush(editor);
      }
    });
  };

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        onDOMBeforeInput={handleDOMBeforeInput}
        renderElement={renderElement}
        placeholder="Write some markdown..."
        spellCheck
        autoFocus
      />
    </Slate>
  );
};
