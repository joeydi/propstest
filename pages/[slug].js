import Link from "next/link";
import articles from "../articles";

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
    return {
        paths: articles.map((article) => {
            return { params: { slug: article.slug } };
        }),
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const article = articles.find((article) => article.slug === context.params.slug);

    return {
        props: {
            article,
        },
    };
}
