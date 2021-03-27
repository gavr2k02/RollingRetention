import React from "react";

import { connect } from "react-redux";

import { addRowDates } from "../redux/actions";

class ButtonAddRow extends React.Component {
    render() {
        return (
            <button
                type='button'
                className='btn btn-primary float-end'
                onClick={() => this.props.addRowDates()}>
                Add row dates
            </button>
        );
    }
}

const mapDispathToProps = {
    addRowDates,
};
export default connect(null, mapDispathToProps)(ButtonAddRow);
