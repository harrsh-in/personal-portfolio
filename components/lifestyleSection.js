const LifestyleSection = ({ data }) => {
    return (
        <div className="main_section__container lifestyle_section__container">
            <h4>My Lifestyle</h4>

            <div className="content__container">
                <div className="section">
                    <div className="title">Habits</div>

                    <div className="subtitle">Food Habits</div>
                    <div className="data">{data.habits.food}</div>

                    <div className="subtitle">Food Habits</div>
                    <div className="data">{data.habits.food}</div>

                    <div className="subtitle">Drinking Habits</div>
                    <div className="data">{data.habits.drink}</div>

                    <div className="subtitle">Smoking Habits</div>
                    <div className="data">{data.habits.smoke}</div>
                </div>

                <div className="section">
                    <div className="title">Assets</div>

                    <div className="subtitle">House</div>
                    <div className="data">{data.assets.house}</div>

                    <div className="subtitle">Car</div>
                    <div className="data">{data.assets.car}</div>
                </div>

                <div className="section">
                    <div className="title">Languages Known</div>

                    {data.languagesKnown.map((languagesKnown) => {
                        return (
                            <div key={languagesKnown.id}>
                                {languagesKnown.data}
                            </div>
                        );
                    })}
                </div>

                <div className="section">
                    <div className="title">Blood Group</div>
                    <div className="data">{data.bloodGroup}</div>
                </div>

                <div className="section">
                    <div className="title">Residential Status</div>
                    <div className="data">{data.residentialStatus}</div>
                </div>

                <div className="section">
                    <div className="title">Physical Challenges</div>
                    <div className="data">{data.physicalChallenges}</div>
                </div>
            </div>
        </div>
    );
};

export default LifestyleSection;
