import PropTypes from 'prop-types';
import React from 'react';

function Comparison(props) {
    var example1;
    var parts;
    var item1;
    var item2;
    var item3;
    var reverse = false;
    var nocomparison = false;

    example1 = (props.comparison.match(/\n/)) ? (props.comparison.split(/\n/)[0]) : props.comparison;

    if (example1.includes('>')) {
        //standard greater than comparison
        parts = example1.split('>');
        item1 = parts[0];
        item2 = parts[1];

        //has a third one
        if(parts[2]) {
            item3 = parts[2];
        }
    } else if (example1.includes('<')) {
        //standard less than comparison
        parts = example1.split('<');
        item1 = parts[1];
        item2 = parts[0];
        reverse = true;
    } else {
        //not a comparison, just an example
        nocomparison = true;
    }

    if (reverse) {
        return(
            <div className={'comparison row'}>
                <span className={'comparison__less'}>{item2} </span>
                <span className={'comparison__icon comparison__icon--less'}></span>
                <span className={'comparison__greater'}> {item1}</span>
            </div>
        );
    } else if (nocomparison) {
        return (
            <div className={'comparison'}>
                <span className={'comparison__greater'}>{example1} </span>
            </div>
        );
    } else if (item3) {
        return(
            <div className={'comparison row'}>
                <span className={'comparison__greater'}>{item1} </span>
                <span className={'comparison__icon comparison__icon--greater'}></span>
                <span className={'comparison__less'}> {item2}</span>
                <span className={'comparison__less'}> {item3}</span>
            </div>
        );
    } else {
        return(
            <div className={'comparison row'}>
                <span className={'comparison__greater'}>{item1} </span>
                <span className={'comparison__icon comparison__icon--greater'}></span>
                <span className={'comparison__less'}> {item2}</span>
            </div>
        );
    }
}

Comparison.propTypes = {
    comparison: PropTypes.any
};

export default Comparison;