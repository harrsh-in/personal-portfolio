const JobSection = ({ data }) => {
    return (
        <div className="main_section__container">
            <h4>My Job</h4>

            <div className="content__container">
                {data.map((job) => {
                    return (
                        <div className="section" key={job.id}>
                            <div className="title">{job.duration}</div>
                            <div className="data">{job.position}</div>
                            <div className="data">{job.city}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default JobSection;
