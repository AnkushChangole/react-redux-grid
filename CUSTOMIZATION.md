## Customization – JIRA Ticket I18N-641

## Purpose
  * Modified react-redux-grid inline edit funtionality
  * Modified repo to pass Save,Cancel and Edit button text as props from the component.
  * This will help us to implement localization for these button text. 

## Logic 
  * For Save and Cancel Button Customization made chanegs in following files.

  File: src/components/plugins/editor/Inline.js

  1) Added props saveText and cancelText as shown below:
  ```javascript
    const {
            BUTTON_TYPES,
            **cancelText,**
            editorState,
            events,
            **saveText,**
            stateKey,
            store
        } = this.props;
  ```

  2) Passed these props to Button in return block.
  ```javascript
   return (
            <div { ...inlineEditorProps }>
                <span { ...buttonContainerProps }>
                    <Button
                        **cancelText={cancelText}**
                        editedRowKey={editedRowKey}
                        editorState={editorState}
                        events={events}
                        **saveText={saveText}**
                        stateKey={stateKey}
                        store={store}
                        type={BUTTON_TYPES.CANCEL}
                    />
                    <Button
                        **cancelText={cancelText}**
                        editedRowKey={editedRowKey}
                        editorState={editorState}
                        events={events}
                        **saveText={saveText}**
                        stateKey={stateKey}
                        store={store}
                        type={BUTTON_TYPES.SAVE}
                    />
                </span>
            </div>
        );
    }
 ```
## Files Path

## Test Steps 
