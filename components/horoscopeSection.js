const HoroscopeSection = ({ data }) => {
    return (
        <div className="main_section__container">
            <h4>Horoscope details</h4>

            <div className="content__container">
                <div className="section">
                    <div className="title">Manglik</div>
                    <div className="data">{data.manglik}</div>
                </div>

                <div className="section">
                    <div className="title">Date of birth</div>
                    <div className="data">{data.dob}</div>
                </div>

                <div className="section">
                    <div className="title">Time of birth</div>
                    <div className="data">{data.time}</div>
                </div>

                <div className="section">
                    <div className="title">City of birth</div>
                    <div className="data">{data.city}</div>
                </div>

                <div className="section">
                    <div className="title">Sun sign</div>
                    <div className="data">{data.sunSign}</div>
                </div>
            </div>
        </div>
    );
};

export default HoroscopeSection;
