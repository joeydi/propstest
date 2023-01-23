import Link from "next/link";
import articles from "../articles";

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
    return {
        props: {
            articles,
        },
    };
}
