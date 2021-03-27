import React from "react";
import { connect } from "react-redux";

import { updateDate } from "../redux/actions";

class TableRow extends React.Component {
    dateRegistration = "dateRegistration";
    dateLastActivity = "dateLastActivity";

    changeInputHandler = (event) => {
        if (event.target.name === this.dateRegistration) {
            const datesUser = {
                id: this.props.dateUser.id,
                dateRegistration: event.target.value,
                dateLastActivity: this.props.dateUser.dateLastActivity,
            };

            this.props.updateDate(datesUser);
        }

        if (event.target.name === this.dateLastActivity) {
            const datesUser = {
                id: this.props.dateUser.id,
                dateRegistration: this.props.dateUser.dateRegistration,
                dateLastActivity: event.target.value,
            };

            this.props.updateDate(datesUser);
        }
    };

    render() {
        return (
            <tr>
                <td>{this.props.dateUser.id}</td>
                <td>
                    <input
                        type='date'
                        className='form-control'
                        name={this.dateRegistration}
                        value={this.props.dateUser.dateRegistration}
                        onChange={this.changeInputHandler}
                        required
                    />
                </td>
                <td>
                    <input
                        type='date'
                        className='form-control'
                        name={this.dateLastActivity}
                        value={this.props.dateUser.dateLastActivity}
                        onChange={this.changeInputHandler}
                        required
                    />
                </td>
            </tr>
        );
    }
}

const mapDispathToProps = {
    updateDate,
};

export default connect(null, mapDispathToProps)(TableRow);
