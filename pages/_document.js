import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />

                    <meta
                        name="description"
                        content="This is the matrimonial portfolio for Harsh Patel | Coderc. It has all the details regarding matrimony for Harsh Patel. Any person can find the required details from this website and can contact me."
                    />
                    <meta name="author" content="Harsh Patel" />
                    <meta name="copyright" content="Harsh Patel" />

                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="Portfolio" />
                    <meta
                        property="og:title"
                        content="Harsh Patel | Coderc"
                        key="ogtitle"
                    />
                    <meta
                        property="og:description"
                        content="This is the matrimonial portfolio for Harsh Patel | Coderc. It has all the details regarding matrimony for Harsh Patel. Any person can find the required details from this website and can contact me."
                        key="ogdesc"
                    />
                    <meta property="og:url" content="https://me.coderc.in" />
                    <meta
                        property="og:image"
                        content="https://ik.imagekit.io/coderc/harsh_profile_photo_UpOsxvNv0.png"
                    />

                    <meta
                        name="twitter:card"
                        content="Matrimonial portfolio website"
                    />
                    <meta name="twitter:title" content="Harsh Patel | Coderc" />
                    <meta
                        name="twitter:description"
                        content="This is the matrimonial portfolio for Harsh Patel | Coderc. It has all the details regarding matrimony for Harsh Patel. Any person can find the required details from this website and can contact me."
                    />
                    <meta
                        name="twitter:image"
                        content="https://ik.imagekit.io/coderc/harsh_profile_photo_UpOsxvNv0.png"
                    />
                    <meta name="twitter:site" content="@harsh_coderc" />

                    <meta
                        name="keywords"
                        content="harsh, Harsh, patel, Patel, coderc, Coderc, website, matrimonial, marriage, business, engineer"
                    />
                    <link rel="canonical" href="http://www.coderc.in/" />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                        crossOrigin="anonymous"
                    />

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
