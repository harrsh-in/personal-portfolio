const FamilySection = ({ data }) => {
    return (
        <div className="main_section__container">
            <h4>Family details</h4>

            <div className="content__container">
                <div className="section">
                    <div className="title">Mother&#39;s occupation</div>
                    <div className="data">{data.motherOccupation}</div>
                </div>

                <div className="section">
                    <div className="title">Mother&#39;s contact details</div>
                    <a href={`tel:${data.motherContact}`}>
                        {data.motherContact}
                    </a>
                </div>

                <div className="section">
                    <div className="title">Father&#39;s occupation</div>
                    <div className="data">{data.fatherOccupation}</div>
                </div>

                <div className="section">
                    <div className="title">Father&#39;s contact details</div>
                    <a href={`tel:${data.fatherContact}`}>
                        {data.fatherContact}
                    </a>
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
                    <div className="title">Family status</div>
                    <div className="data">{data.familyStatus}</div>
                </div>

                <div className="section">
                    <div className="title">Family type</div>
                    <div className="data">{data.familyType}</div>
                </div>

                <div className="section">
                    <div className="title">Family values</div>
                    <div className="data">{data.familyValues}</div>
                </div>
            </div>
        </div>
    );
};

export default FamilySection;
