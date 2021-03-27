const Loader = () => {
    return (
        <div
            className='spinner-border text-success float-end me-5'
            role='status'>
            <span className='visually-hidden'>Loading...</span>
        </div>
    );
};

export default Loader;
