import { RollingRetention7Day, RollingRetentionXDay } from "./index";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import {
    calculateData7DayFromDB,
    calculateData7DayFromClient,
} from "../redux/actions";

const RollingRetention = ({ datesUsers }) => {
    const dispath = useDispatch();

    return (
        <div className='container p-5'>
            <h3 className='text-secondary'>ROLLING RETENTION</h3>
            <div className='container p-5 pt-3'>
                <RollingRetention7Day />
            </div>
            <div className='container p-5 pt-3'>
                <RollingRetentionXDay />
            </div>
            <div className='container p-5 pt-0'>
                <button
                    type='button'
                    className='btn btn-primary float-end'
                    onClick={() => dispath(calculateData7DayFromDB())}>
                    Calculate from DB
                </button>
                <button
                    type='button'
                    className='btn btn-primary float-end me-3'
                    onClick={() =>
                        dispath(calculateData7DayFromClient(datesUsers))
                    }>
                    Calculate from client
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        datesUsers: state.datesUsers.datesUser,
    };
};

export default connect(mapStateToProps)(RollingRetention);
