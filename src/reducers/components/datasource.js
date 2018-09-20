import { OrderedMap } from 'immutable';

import {
    ADD_NEW_ROW,
    DISMISS_EDITOR,
    MOVE_NODE,
    MOVE_NODE_FLAT,
    REMOVE_ROW,
    SAVE_ROW,
    SET_DATA,
    SET_TREE_NODE_VISIBILITY,
    SET_TREE_DATA_PARTIAL,
    SORT_DATA,
    UPDATE_ROW,
    INSERT_ROW
} from '../../constants/ActionTypes';

import handleActions from './../../util/handleActions';

import {
    addNewRow,
    dismissEditor,
    insertRow,
    moveNode,
    moveNodeFlat,
    removeRow,
    saveRow,
    setData,
    setPartialTreeData,
    setTreeNodeVisibility,
    sortData,
    updateRow
} from './../actionHelpers/datasource';

const initialState = new OrderedMap();

export default handleActions({
    [ADD_NEW_ROW]: addNewRow,
    [DISMISS_EDITOR]: dismissEditor,
    [INSERT_ROW]: insertRow,
    [MOVE_NODE]: moveNode,
    [MOVE_NODE_FLAT]: moveNodeFlat,
    [REMOVE_ROW]: removeRow,
    [SAVE_ROW]: saveRow,
    [SET_DATA]: setData,
    [SET_TREE_NODE_VISIBILITY]: setTreeNodeVisibility,
    [SET_TREE_DATA_PARTIAL]: setPartialTreeData,
    [SORT_DATA]: sortData,
    [UPDATE_ROW]: updateRow
}, initialState);
