import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { prefix } from '../../../util/prefix';
import { CLASS_NAMES } from '../../../constants/GridConstants';
import '../../../style/components/plugins/selection/model.styl';

class PagerToolbar extends Component {

    static defaultProps = {
        store: React.PropTypes.func
    }

    render() {

        const { rowId, selectedRows } = this.props;

        const checkBoxContainerProps = {
            className: prefix(CLASS_NAMES.SELECTION_MODEL.CHECKBOX_CONTAINER)
        }

        const checkBoxProps = {
            className: prefix(CLASS_NAMES.SELECTION_MODEL.CHECKBOX),
            checked: selectedRows ? selectedRows[rowId] : false
        }

        return (
            <td { ...checkBoxContainerProps }>
                <input type="checkbox" { ...checkBoxProps } />
            </td>
        );
    }
}

function mapStateToProps(state) {
    
    return {
        pager: state.pager.get('pagerState'),
        dataSource: state.dataSource.get('gridData'),
        selectedRows: state.selection.get('selectedRows')
    };
}

export default connect(mapStateToProps)(PagerToolbar);