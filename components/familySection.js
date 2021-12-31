const FamilySection = ({ data }) => {
    return (
        <div className="main_section__container">
            <h4>Family Details</h4>

            <div className="content__container">
                <div className="section">
                    <div className="title">Mother&#39;s Occupation</div>
                    <div className="data">{data.motherOccupation}</div>
                </div>

                <div className="section">
                    <div className="title">Father&#39;s Occupation</div>
                    <div className="data">{data.fatherOccupation}</div>
                </div>

                <div className="section">
                    <div className="title">Number of sisters</div>
                    <div className="data">{data.sister}</div>
                </div>

                <div className="section">
                    <div className="title">Number of brothers</div>
                    <div className="data">{data.brother}</div>
                </div>

                <div className="section">
                    <div className="title">Family Status</div>
                    <div className="data">{data.familyStatus}</div>
                </div>

                <div className="section">
                    <div className="title">Family Type</div>
                    <div className="data">{data.familyType}</div>
                </div>

                <div className="section">
                    <div className="title">Family Values</div>
                    <div className="data">{data.familyValues}</div>
                </div>
            </div>
        </div>
    );
};

export default FamilySection;
