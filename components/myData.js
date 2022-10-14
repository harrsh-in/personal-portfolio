const yearDifference = () => {
    const birthDate = new Date("Dec 21, 1998");
    const diff =
        new Date(new Date() - new Date(birthDate)).getFullYear() - 1970;

    return diff;
};

const myData = {
    my_image: "https://ik.imagekit.io/harrsh/Harrsh.jpg",
    name: "Harsh Patel",
    current_position: "Senior Software Engineer",
    about: {
        age: yearDifference(),
    },
};

export default myData;
