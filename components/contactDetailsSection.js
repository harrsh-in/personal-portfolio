const ContactDetailsSection = ({ data }) => {
    return (
        <div className="main_section__container">
            <h4>Contact details</h4>

            <div className="content__container">
                <div className="section">
                    <div className="title">Call</div>
                    <div className="data">
                        <a href={`tel:${data.phone_one}`}>{data.phone_one}</a>
                    </div>
                    <div className="data">
                        <a href={`tel:${data.phone_two}`}>{data.phone_two}</a>
                    </div>
                </div>

                <div className="section">
                    <div className="title">WhatsApp</div>
                    <div className="data">
                        <a href={`https://wa.me/:+91${data.whatsApp}`}>
                            {data.whatsApp}
                        </a>
                    </div>
                </div>

                <div className="section">
                    <div className="title">Email</div>
                    <div className="data">
                        <a href={`mailto:${data.email_one}`}>
                            {data.email_one}
                        </a>
                    </div>
                    <div className="data">
                        <a href={`mailto:${data.email_two}`}>
                            {data.email_two}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetailsSection;
