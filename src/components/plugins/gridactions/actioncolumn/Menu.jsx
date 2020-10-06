import PropTypes from 'prop-types';
import React from 'react';
import { ConnectedMenu as MenuCmp } from './../../../core/menu/Menu';
import { handleEditClick } from './../../../../util/handleEditClick';

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

    if (editor.config.enabled && type !== 'header') {
        actions.menu.unshift(
            getEditAction(
                editor, store, rowId, rowData, rowIndex, columns, stateKey, editText
            )
        );

        if (editor.config.hideEditAction) {
            actions.menu.shift();
        }
    }

    const menuProps = {
        ...actions,
        metaData: {
            rowId,
            rowData: rowData && rowData.toJS
                ? rowData.toJS()
                : rowData,
            rowIndex
        },
        maxHeight,
        reducerKeys,
        stateKey,
        store
    };

    return (
        <MenuCmp { ...menuProps } />
    );
};

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
