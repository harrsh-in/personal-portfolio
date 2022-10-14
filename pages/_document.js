import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />

                    <meta
                        name="description"
                        content="This is the matrimonial portfolio for Harrsh Patel. It has all the details regarding matrimony for Harrsh Patel. Any person can find the required details from this website and can contact me."
                    />
                    <meta name="author" content="Harrsh Patel" />
                    <meta name="copyright" content="Harrsh Patel" />

                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Portfolio" />
                    <meta
                        property="og:title"
                        content="Harrsh Patel"
                        key="ogtitle"
                    />
                    <meta
                        property="og:description"
                        content="This is the matrimonial portfolio for Harrsh Patel. It has all the details regarding matrimony for Harrsh Patel. Any person can find the required details from this website and can contact me."
                        key="ogdesc"
                    />
                    <meta property="og:url" content="https://harrsh.com" />
                    <meta
                        property="og:image"
                        content="https://ik.imagekit.io/harrsh/Harrsh.jpg"
                    />

                    <meta
                        name="twitter:card"
                        content="Matrimonial portfolio website"
                    />
                    <meta name="twitter:title" content="Harrsh Patel" />
                    <meta
                        name="twitter:description"
                        content="This is the matrimonial portfolio for Harrsh Patel. It has all the details regarding matrimony for Harrsh Patel. Any person can find the required details from this website and can contact me."
                    />
                    <meta
                        name="twitter:image"
                        content="https://ik.imagekit.io/harrsh/Harrsh.jpg"
                    />
                    <meta name="twitter:site" content="@harrsh2124" />

                    <meta
                        name="keywords"
                        content="harrsh, Harrsh, patel, Patel, website, matrimonial, marriage, business, engineer"
                    />
                    <link rel="canonical" href="http://www.harrsh.com/" />

                    <script
                        data-ad-client="ca-pub-9887699084363816"
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
