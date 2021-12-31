const MyInfo = ({ name, currentPosition }) => {
    return (
        <div className="my_data__container">
            <h1>{name}</h1>
            <p>{currentPosition}</p>
        </div>
    );
};

export default MyInfo;
