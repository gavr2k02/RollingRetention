import { RollingRetention7Day, RollingRetentionXDay } from "./index";

const RollingRetention = () => {
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
                <button type='button' className='btn btn-primary float-end'>
                    Calculate charts
                </button>
            </div>
        </div>
    );
};

export default RollingRetention;
