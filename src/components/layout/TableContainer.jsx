import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { gridConfig } from './../../constants/GridConstants';
import { prefix } from './../../util/prefix';
import { debounce, throttle } from './../../util/throttle';
import Row from './TableRow';
import Header from './Header';

const { any, bool, func, number, object, oneOfType, string } = PropTypes;

export class TableContainer extends Component {

    render() {

        const { CLASS_NAMES } = gridConfig();
        const {
            canDrop,
            editorComponent,
            headerProps,
            height,
            rowIdentifier,
            rowProps,
            infinite,
            sortFn,
            skipFn
        } = this.props;

        const { containerScrollTop, containerHeight } = this.state;

        return (
            <div
                className={prefix(CLASS_NAMES.TABLE_CONTAINER)}
                style={{ height: height !== false ? height : null }}
            >
                <table
                    cellSpacing={0}
                    className={
                        prefix(
                            CLASS_NAMES.TABLE, CLASS_NAMES.HEADER_HIDDEN
                        )
                    }
                >
                    <Header { ...headerProps } />
                    <Row
                        canDrop={canDrop}
                        containerHeight={containerHeight}
                        containerScrollTop={containerScrollTop}
                        infinite={infinite}
                        rowIdentifier={rowIdentifier}
                        skipFn={skipFn}
                        sortFn={sortFn}
                        { ...rowProps }
                    />
                </table>
                { editorComponent }
            </div>
        );
    }

    componentDidMount() {
        const { infinite } = this.props;

        if (infinite) {
            const container = ReactDOM.findDOMNode(this);

            this._scrollListener = throttle(
                this.handleScroll.bind(this),
                this,
                50,
                { leading: false, trailing: true }
            );

            container.addEventListener(
                'scroll',
                this._scrollListener
            );

            this._resizeListener = debounce(this.handleResize.bind(this), 5);

            window.addEventListener('resize', this._resizeListener);

            this.handleResize();
        }
    }
    componentDidUpdate() {
        this.handleResize();
    }

    componentWillUnmount() {
        const container = ReactDOM.findDOMNode(this);

        container.removeEventListener('scroll', this._scrollListener);
        window.removeEventListener('resize', this._resizeListener);
    }

    constructor(props) {
        super(props);

        this.state = {
            containerScrollTop: 0
        };
    }

    static propTypes = {
        canDrop: func,
        editorComponent: any,
        headerProps: object,
        height: oneOfType([
            bool,
            string,
            number
        ]),
        infinite: bool,
        rowIdentifier: string,
        rowProps: object,
        skipFn: func,
        sortFn: func
    };

    static defaultProps = {
        headerProps: {},
        rowProps: {}
    };

    handleResize = () => {
        const { infinite } = this.props;
        const { containerHeight } = this.state;

        if (infinite) {
            const container = ReactDOM.findDOMNode(this);

            if (containerHeight !== container.clientHeight) {
                this.setState({
                    containerHeight: container.clientHeight
                });
            }
        }
    }

    handleScroll = () => {
        const container = ReactDOM.findDOMNode(this);

        this.setState({
            containerScrollTop: container.scrollTop
        });
    }

}

export default TableContainer;
