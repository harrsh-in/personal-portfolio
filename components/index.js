import { Fragment } from "react";
import AboutSection from "./aboutSection";
import ContactDetailsSection from "./contactDetailsSection";
import EducationSection from "./educationSection";
import FamilySection from "./familySection";
import HoroscopeSection from "./horoscopeSection";
import JobSection from "./jobSection";
import LifestyleSection from "./lifestyleSection";
import MyInfo from "./myInfo";
import MyLikesSection from "./myLikesSection";
import MyPhoto from "./myPhoto";
import PartnerPreferencesSection from "./partnerPreferencesSection";

const HomeComponent = ({ myData }) => {
    return (
        <Fragment>
            <MyPhoto myPhotoURL={myData.my_image} />
            <MyInfo
                name={myData.name}
                currentPosition={myData.current_position}
            />

            <AboutSection data={myData.about} />

            <EducationSection data={myData.education} />

            <JobSection data={myData.job} />

            <FamilySection data={myData.family} />

            <LifestyleSection data={myData.lifestyle} />

            <MyLikesSection data={myData.myLikes} />

            <HoroscopeSection data={myData.horoscopeDetails} />

            <PartnerPreferencesSection data={myData.partnerPreferences} />

            <ContactDetailsSection data={myData.contactDetails} />
        </Fragment>
    );
};

export default HomeComponent;
