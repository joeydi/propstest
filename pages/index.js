import Link from "next/link";

export default function Home({ articles }) {
    return (
        <main>
            <h1>
                <Link href="/">Articles</Link>
            </h1>
            <ul>
                {articles.map((article) => (
                    <li>
                        <Link href={`/${article.slug}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://simple-creature-website-assets.s3.amazonaws.com/propstest/articles.json");
    const articles = await res.json();

    return {
        props: {
            articles,
        },
    };
}
