## Customization – JIRA Ticket I18N-641

## Purpose
  * Modified react-redux-grid inline edit funtionality
  * Modified repo to pass Save,Cancel and Edit button text as props from the component.
  * This will help us to implement localization for these button text. 

## Logic 
  * For Save and Cancel Button Customization made chanegs in following files.

    [File Path: src/components/plugins/editor/Inline.js]

  * Added props **saveText** and **cancelText** as shown below:
  ```javascript
    const {
            BUTTON_TYPES,
            cancelText,
            editorState,
            events,
            saveText,
            stateKey,
            store
        } = this.props;
  ```

  * Passed props **cancelText={cancelText}** and **saveText={saveText}** to Button in return block.
  ```javascript
   return (
            <div { ...inlineEditorProps }>
                <span { ...buttonContainerProps }>
                    <Button
                        cancelText={cancelText}
                        editedRowKey={editedRowKey}
                        editorState={editorState}
                        events={events}
                        saveText={saveText}
                        stateKey={stateKey}
                        store={store}
                        type={BUTTON_TYPES.CANCEL}
                    />
                    <Button
                        cancelText={cancelText}
                        editedRowKey={editedRowKey}
                        editorState={editorState}
                        events={events}
                        saveText={saveText}
                        stateKey={stateKey}
                        store={store}
                        type={BUTTON_TYPES.SAVE}
                    />
                </span>
            </div>
        );
    }
  ```
  [File Path: src/components/plugins/editor/Manager.js]

  * Updated **getComponent** function and added **saveText** and **cancelText** as parameter.

  ```javascript
   getComponent(
        plugins, reducerKeys, store, events, selectionModel, editor, columns, saveText, cancelText
    ) {

        const editorProps = {
            columns,
            config: this.config,
            reducerKeys,
            store,
            stateKey: this.stateKey,
            events,
            saveText,
            cancelText,
        };
  ```
  [File Path:src/components/Grid.jsx]

  * Added **saveText** and **cancelText** props to const

  ```javascript
   const {
            canDrag,
            canDrop,
            cancelText,
            classNames,
            columnState,
            dataSource,
            gridData,
            height,
            infinite,
            onDragStart,
            onRowDidNotDrop,
            pager,
            pageSize,
            plugins,
            reducerKeys,
            rowIdentifier,
            saveText,
            skipFn,
            sortFn,
            stateKey
        } = this.props;
  ```
  * Added **saveText** and **cancelText** to **static prpoTypes**

  ```javascript
  static propTypes = {
        canDrag: func,
        canDrop: func,
        cancelText: string,
        classNames: array,
        columnState: object,
        columns: arrayOf(object).isRequired,
        data: oneOf([
            arrayOf(object),
            object,
        ]),
        dataSource: any,
        dragAndDrop: bool,
        editorState: object,
        emptyDataMessage: any,
        events: object,
        expandOnLoad: bool,
        filterFields: object,
        gridData: object,
        gridType: GRID_TYPES,
        height: oneOfType([
            bool,
            string,
            number
        ]),
        infinite: bool,
        loadingState: object,
        menuState: object,
        onDragStart: func,
        onRowDidNotDrop: func,
        pageSize: number,
        pager: object,
        plugins: object,
        reducerKeys: oneOfType([object, string]),
        rowIdentifier: string,
        saveText: string,
        selectedRows: object,
        showTreeRootNode: bool,
        skipFn: func,
        sortFn: func,
        stateKey: string,
        stateful: bool,
        store: object
    };
  ```

  * Pass **saveText** and **cancelText** to **getEditor** function.
  ```javascript
  getEditor = () => this.editor.getComponent(
        this.props.plugins,
        this.props.reducerKeys,
        this.getStore(),
        this.props.events,
        this.selectionModel,
        this.editor,
        this.props.columns,
        this.props.saveText,
        this.props.cancelText
    );
  ```
## Files Path

## Test Steps 
