import Head from "next/head";

const Custom404 = () => {
    return (
        <div className="custom404">
            <Head>
                <title>Page not found</title>

                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <div className="error_number">404</div>
            <div className="error_message">Page not found</div>
        </div>
    );
};

export default Custom404;
