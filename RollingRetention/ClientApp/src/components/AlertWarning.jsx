import React from "react";

const AlertWarning = ({ text }) => {
    return (
        <div className='alert alert-warning' role='alert'>
            {text}
        </div>
    );
};

export default AlertWarning;
