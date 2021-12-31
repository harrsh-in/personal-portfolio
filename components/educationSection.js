const EducationSection = ({ data }) => {
    return (
        <div className="main_section__container">
            <h4>My Education</h4>

            <div className="content__container">
                {data.map((education) => {
                    return (
                        <div className="section" key={education.id}>
                            <div className="title">{education.duration}</div>
                            <div className="data">{education.field}</div>
                            <div className="data">{education.university}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EducationSection;
