import React from "react";

const AlertError = ({ text }) => {
    return (
        <div className='alert alert-danger' role='alert'>
            {text}
        </div>
    );
};

export default AlertError;
