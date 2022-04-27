import Image from "next/image";

const myLoader = ({ src, width }) => {
    return `${src}?w=${width}&q=100`;
};

const MyPhoto = ({ myPhotoURL }) => {
    return (
        <div className="my_photo__container">
            <Image
                loader={myLoader}
                src={myPhotoURL}
                alt="Harrsh Patel"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                height="150"
                width="150"
                priority={true}
            />
        </div>
    );
};

export default MyPhoto;
