const PartnerPreferencesSection = ({ data }) => {
    return (
        <div className="main_section__container">
            <h4>Partner preferences</h4>

            <div className="content__container">
                <div className="section">
                    <div className="title">Age</div>
                    <div className="data">{data.age}</div>
                </div>

                <div className="section">
                    <div className="title">Height</div>
                    <div className="data">{data.height}</div>
                </div>

                <div className="section">
                    <div className="title">Religion</div>
                    <div className="data">{data.religion}</div>
                </div>

                <div className="section">
                    <div className="title">Country</div>
                    <div className="data">{data.country}</div>
                </div>

                <div className="section">
                    <div className="title">State</div>

                    {data.state.map((state) => {
                        return <div key={state.id}>{state.data}</div>;
                    })}
                </div>

                <div className="section">
                    <div className="title">Diet</div>

                    {data.diet.map((diet) => {
                        return <div key={diet.id}>{diet.data}</div>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default PartnerPreferencesSection;
