import Link from "next/link";

export default function Article({ article }) {
    return (
        <main>
            <h1>
                <Link href="/">Articles</Link>
            </h1>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </main>
    );
}

export async function getStaticPaths() {
    const res = await fetch("https://simple-creature-website-assets.s3.amazonaws.com/propstest/articles.json");
    const articles = await res.json();

    return {
        paths: articles.map((article) => {
            return { params: { slug: article.slug } };
        }),
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const res = await fetch("https://simple-creature-website-assets.s3.amazonaws.com/propstest/articles.json");
    const articles = await res.json();
    const article = articles.find((article) => article.slug === context.params.slug);

    return {
        props: {
            article,
        },
    };
}
