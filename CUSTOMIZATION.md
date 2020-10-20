## Customization – JIRA Ticket I18N-641

## Purpose
  * Modified react-redux-grid inline edit funtionality
  * Modified repo to pass Save,Cancel and Edit button text as props from the component.
  * This will help us to implement localization for these button text. 

## Logic - Save and Cancel Button
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

## Logic - Edit Button
  * For **Edit** Button Customization made chanegs in following files.

  [File Path:src/components/plugins/gridactions/actioncolumn/Menu.jsx]

  * Added **editText** to **Menu**
  ```javascript
  export const Menu = ({
    actions,
    columns,
    editor,
    maxHeight,
    reducerKeys,
    rowData,
    rowId,
    rowIndex,
    stateKey,
    store,
    type,
    editText
}) => {
  ```

  * Passed **editText** props to **getEditAction** fucntion
  ```javascript
  if (editor.config.enabled && type !== 'header') {
        actions.menu.unshift(
            getEditAction(
                editor, store, rowId, rowData, rowIndex, columns, stateKey, editText
            )
        );
  ```
  * Updated **getEditAction** and updated text with **editText** prop value.
  ```javascript
  export const getEditAction = (
    editor, store, rowId, rowData, rowIndex, columns, stateKey, editText
) => {
    return {
        text: editText,
        EVENT_HANDLER: handleEditClick.bind(
            this, editor, store, rowId, rowData, rowIndex, columns, stateKey, {}
        ),
        key: 'grid-edit-action'
    };
};
   ```
 * Included **editText** in propTypes and assign defaultProps text as **Edit**
 ```javascript
 Menu.propTypes = {
    actions: PropTypes.object,
    columns: PropTypes.arrayOf(PropTypes.object),
    editText: PropTypes.string,
    editor: PropTypes.object,
    maxHeight: PropTypes.number,
    reducerKeys: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    rowData: PropTypes.object,
    rowId: PropTypes.string,
    rowIndex: PropTypes.number,
    stateKey: PropTypes.string,
    store: PropTypes.object,
    type: PropTypes.string
};

Menu.defaultProps = {
    editText: 'Edit'
};
  ```

 [File Path: src/components/plugins/gridactions/ActionColumn.jsx]

 * Added **editText** to const
 ```javascript
 render() {
        const { CLASS_NAMES } = gridConfig();
        const {
            columns,
            editText,
            editor,
            events,
            headerActionItemBuilder,
            iconCls,
            menuState,
            reducerKeys,
            rowData,
            rowId,
            rowIndex,
            stateKey,
            stateful,
            store,
            type
        } = this.props;
  ```
  * Added **editText** in **actionArgs** array. 
  ```javascript
   const actionArgs = [
            columns,
            containerProps,
            iconProps,
            menuShown,
            actions,
            columns,
            store,
            editor,
            reducerKeys,
            rowId,
            rowData,
            rowIndex,
            stateKey,
            stateful,
            headerActionItemBuilder,
            maxHeight,
            editText,
            events
        ];
  ```
  * Added **editText** in **getColumn** function
  ```javascript
    export const getColumn = (
    cols,
    containerProps,
    iconProps,
    menuShown,
    actions,
    columns,
    store,
    editor,
    reducerKeys,
    rowId,
    rowData,
    rowIndex,
    stateKey,
    stateful,
    headerActionItemBuilder,
    maxHeight,
    editText
) => {
    const { CLASS_NAMES } = gridConfig();
    const menu = menuShown
        ?
        <Menu {
            ...{
                actions: addKeysToActions(actions),
                type: null,
                rowData,
                store,
                editor,
                reducerKeys,
                rowId,
                columns: cols,
                stateKey,
                rowIndex,
                maxHeight,
                editText
            }
        } />
  ```
  [File Path: src/components/core/ColumnManager.js]

  *Added **editText** to **addActionColumn** function.
  ```javascript
  addActionColumn({
        cells,
        columns,
        type,
        id,
        reducerKeys,
        rowData,
        rowIndex,
        menuState,
        stateKey,
        stateful,
        editText
    }) {

        const { GRID_ACTIONS } = this.plugins;
        const cellsCopy = cells;
        const actionProps = {
            actions: GRID_ACTIONS,
            store: this.store,
            type,
            columns: columns || this.columns,
            rowId: id,
            rowData,
            rowIndex,
            editor: this.editor,
            reducerKeys,
            selModel: this.selModel,
            stateful,
            stateKey,
            menuState,
            gridState: columns,
            headerActionItemBuilder: this.config.headerActionItemBuilder,
            key: keyFromObject(cells, ['row', 'actionhandler']),
            editText
        };
    ```
    [File path: src/components/layout/TableRow.jsx]
    * Added **editText** to const props.
    ```javascript
    const {
            columnManager,
            columns,
            connectDragSource,
            connectDropTarget,
            dragAndDrop,
            editor,
            editorState,
            editText,
            events,
            gridType,
            index,
            isDragging,
            menuState,
            plugins,
            readFunc,
            reducerKeys,
            row,
            selectedRows,
            selectionModel,
            showTreeRootNode,
            stateful,
            stateKey,
            store,
            treeData
        } = this.props;
    ```

    * Passed **editText** to **columnManager.addActionColumn**
    ```javascript
    columnManager.addActionColumn({
            cells,
            columns,
            type: 'row',
            id,
            reducerKeys,
            rowData: row,
            rowIndex: index,
            stateKey,
            menuState,
            editText: editText
        });
    ```

    [File Path: src/components/layout/TableRow.jsx]

    * Added **editText={this.props.editText}** to **toRowComponents**
    ```javascript
    toRowComponents = () => (row, index, rows) => (
        <Row
            canDrag={this.props.canDrag}
            canDrop={this.props.canDrop}
            columnManager={this.props.columnManager}
            columns={this.props.columns}
            dragAndDrop={this.props.dragAndDrop}
            editor={this.props.editor}
            editorState={this.props.editorState}
            editText={this.props.editText}
            emptyDataMessage={this.props.emptyDataMessage}
            events={this.props.events}
            findRow={this.findRow}
            gridType={this.props.gridType}
            index={index}
            key={getRowKey(this.props.columns, row)}
            menuState={this.props.menuState}
            moveRow={this.moveRow}
            moveRowFlat={this.moveRowFlat}
            nextRow={rows.get(index + 1)}
            onDragStart={this.props.onDragStart}
            onRowDidNotDrop={this.props.onRowDidNotDrop}
            plugins={this.props.plugins}
            previousRow={rows.get(index - 1)}
            readFunc={this.props.readFunc}
            reducerKeys={this.props.reducerKeys}
            row={row}
            rowIdentifier={this.props.rowIdentifier}
            selectedRows={this.props.selectedRows}
            selectionModel={this.props.selectionModel}
            showTreeRootNode={this.props.showTreeRootNode}
            stateKey={this.props.stateKey}
            stateful={this.props.stateful}
            store={this.props.store}
            treeData={getTreeData(row)}
        />
    );
    ```

    [File Path: src/components/layout/TableContainer.jsx]

    * Add **editText** to const props
    ```javascript
    const {
            canDrag,
            canDrop,
            editorComponent,
            editText,
            headerProps,
            height,
            rowIdentifier,
            rowProps,
            onDragStart,
            onRowDidNotDrop,
            infinite,
            sortFn,
            skipFn
        } = this.props;
    ```
    * Passed **editText** to **<Row>**
    ```javascript
    <Row
                        canDrag={canDrag}
                        canDrop={canDrop}
                        containerHeight={containerHeight}
                        containerScrollTop={containerScrollTop}
                        infinite={infinite}
                        onDragStart={onDragStart}
                        onRowDidNotDrop={onRowDidNotDrop}
                        rowIdentifier={rowIdentifier}
                        skipFn={skipFn}
                        sortFn={sortFn}
                        editText={editText}
                        { ...rowProps }
                    />
    ```
    [File Path: src/components/Grid.jsx]

    * Added **editText** in const props
    ```javascript
    const {
            canDrag,
            canDrop,
            cancelText,
            classNames,
            columnState,
            dataSource,
            editText,
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
    * Passed **editText** to **<TableContainer>**
    ```javascript
    <TableContainer
                    canDrag={canDrag}
                    canDrop={canDrop}
                    editorComponent={editorComponent}
                    headerProps={this.getHeaderProps(false)}
                    height={height}
                    infinite={infinite}
                    onDragStart={onDragStart}
                    onRowDidNotDrop={onRowDidNotDrop}
                    rowIdentifier={rowIdentifier}
                    rowProps={this.getRowProps()}
                    skipFn={skipFn}
                    sortFn={sortFn}
                    editText={editText}
                />
    ```
    * Added **editText** to **static propTypes**
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
        editText: string,
        emptyDataMessage: any
    ```

## Files Path

* src/components/Grid.jsx
* src/components/core/ColumnManager.js
* src/components/layout/TableContainer.jsx
* src/components/layout/TableRow.jsx
* src/components/layout/table-row/Row.jsx
* src/components/plugins/editor/Inline.jsx
* src/components/plugins/editor/Manager.js
* src/components/plugins/gridactions/ActionColumn.jsx
* src/components/plugins/gridactions/actioncolumn/Menu.jsx

## Test Steps 
