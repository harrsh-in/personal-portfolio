const AboutSection = ({ data }) => {
    return (
        <div className="main_section__container">
            <h4>About me</h4>

            <div className="content__container">
                <div className="section">
                    <div className="title">Age</div>
                    <div className="data">{data.age}</div>
                </div>

                <div className="section">
                    <div className="title">Date of birth</div>
                    <div className="data">{data.dob}</div>
                </div>

                <div className="section">
                    <div className="title">Marital status</div>
                    <div className="data">{data.maritalStatus}</div>
                </div>

                <div className="section">
                    <div className="title">Height</div>
                    <div className="data">{data.height}</div>
                </div>

                <div className="section">
                    <div className="title">Weight</div>
                    <div className="data">{data.weight}</div>
                </div>

                <div className="section">
                    <div className="title">Religion</div>
                    <div className="data">{data.religion}</div>
                </div>

                <div className="section">
                    <div className="title">Mother tongue</div>
                    <div className="data">{data.motherTongue}</div>
                </div>

                <div className="section">
                    <div className="title">Annual income</div>
                    <div className="data">{data.annualIncome}</div>
                </div>

                <div className="section">
                    <div className="title">Family income</div>
                    <div className="data">{data.familyIncome}</div>
                </div>

                <div className="section">
                    <div className="title">Location</div>
                    <div className="data">{data.location}</div>
                </div>

                <div className="section">
                    <div className="title">Caste</div>
                    <div className="data">{data.motherCaste}</div>
                    <div className="data">{data.fatherCaste}</div>
                </div>

                <div className="section">
                    <div className="title">Description</div>
                    <div className="data">
                        {data.description.map((innerData) => {
                            return (
                                <div key={innerData.id} className="mapped_data">
                                    {innerData.data}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="section">
                    <div className="title">Family description</div>
                    <div className="data">{data.familyDescription}</div>
                </div>

                <div className="section">
                    <div className="data">
                        I write blogs at{" "}
                        <a
                            href={`https://${data.blogLink}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {data.blogLink}
                        </a>
                    </div>
                </div>

                <div className="section">
                    <div className="title">Education description</div>
                    <div className="data">{data.educationDescription}</div>
                </div>

                <div className="section">
                    <div className="title">Occupation description</div>
                    <div className="data">{data.occupationDescription}</div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
