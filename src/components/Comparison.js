import PropTypes from 'prop-types';
import React from 'react';

function Comparison(props) {
    var example1;
    var parts;
    var item1;
    var item2;
    var icon;

    example1 = (props.comparison.match(/\n/)) ? (props.comparison.split(/\n/)[0]) : props.comparison;

    if (example1.includes('>')) {
        parts = example1.split('>');
        item1 = parts[0];
        item2 = parts[1];
        icon = 'fa-greater-than';
    } else if (example1.includes('<')) {
        parts = example1.split('<');
        item1 = parts[1];
        item2 = parts[2];
        icon = 'fa-less-than';
    }

    return (
        <div className={'comparison'}>
            <span className={'comparison__greater'}>{item1}</span>
            <span className={'comparison__icon fas ' + icon}></span>
            <span className={'comparison__less'}>{item2}</span>
        </div>
    );
}

Comparison.propTypes = {
    comparison: PropTypes.any
};

export default Comparison;