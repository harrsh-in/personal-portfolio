import HomeComponent from "../components";
import Head from "next/head";

const Home = () => {
    return (
        <div className="home__container">
            <Head>
                <title>Harsh Patel</title>

                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <HomeComponent />
        </div>
    );
};

export default Home;
