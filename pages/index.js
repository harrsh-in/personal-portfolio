import HomeComponent from "../components";
import Head from "next/head";
import { myData as JSONData } from "../components/myData";

const Home = () => {
    return (
        <div className="home__container">
            <Head>
                <title>Harrsh Patel</title>

                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <HomeComponent myData={JSONData} />
        </div>
    );
};

export default Home;
