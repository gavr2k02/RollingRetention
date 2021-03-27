import { RollingRetention7Day, RollingRetentionXDay } from "./index";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { AlertError } from "./index";
import {
    calculateData7DayFromDB,
    calculateData7DayFromClient,
    calculateDataXDayFromDB,
    calculateDataXDayFromClient,
} from "../redux/actions";

const RollingRetention = ({ datesUsers, alertErrorRR }) => {
    const dispath = useDispatch();

    const laodFromDBHandle = () => {
        dispath(calculateDataXDayFromDB());
        dispath(calculateData7DayFromDB());
    };

    const laodFromClientHandle = () => {
        dispath(calculateDataXDayFromClient(datesUsers));
        dispath(calculateData7DayFromClient(datesUsers));
    };

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
                {alertErrorRR && <AlertError text={alertErrorRR} />}

                <button
                    type='button'
                    className='btn btn-primary float-end'
                    onClick={laodFromDBHandle}>
                    Calculate from DB
                </button>
                <button
                    type='button'
                    className='btn btn-primary float-end me-3'
                    onClick={laodFromClientHandle}>
                    Calculate from client
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        datesUsers: state.datesUsers.datesUser,
        alertErrorRR: state.app.alertErrorRR,
    };
};

export default connect(mapStateToProps)(RollingRetention);
