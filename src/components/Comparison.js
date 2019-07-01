import PropTypes from 'prop-types';
import React from 'react';

function Comparison(props) {
    var example1;
    var parts;
    var item1;
    var item2;
    var reverse = false;

    example1 = (props.comparison.match(/\n/)) ? (props.comparison.split(/\n/)[0]) : props.comparison;

    if (example1.includes('>')) {
        parts = example1.split('>');
        item1 = parts[0];
        item2 = parts[1];
    } else if (example1.includes('<')) {
        parts = example1.split('<');
        item1 = parts[1];
        item2 = parts[0];
        reverse = true;
    }

    return reverse ?
        <div className={'comparison'}>
            <span className={'comparison__less'}>{item2} </span>
            <span className={'comparison__icon fas fa-less-than'}></span>
            <span className={'comparison__greater'}> {item1}</span>
        </div> :
        <div className={'comparison'}>
            <span className={'comparison__greater'}>{item1} </span>
            <span className={'comparison__icon fas fa-greater-than'}></span>
            <span className={'comparison__less'}> {item2}</span>
        </div>;
}

Comparison.propTypes = {
    comparison: PropTypes.any
};

export default Comparison;