const MyLikesSection = ({ data }) => {
    return (
        <div className="main_section__container">
            <h4>My Likes</h4>

            <div className="content__container">
                <div className="section">
                    <div className="title">Hobbies</div>

                    {data.hobbies.map((hobbies) => {
                        return <div key={hobbies.id}>{hobbies.data}</div>;
                    })}
                </div>

                <div className="section">
                    <div className="title">Interests</div>

                    {data.interests.map((interests) => {
                        return <div key={interests.id}>{interests.data}</div>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default MyLikesSection;
