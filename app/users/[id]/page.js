import Article from "@/components/Article"

export async function generateMetadata({ params }) {
    const id = (await params).id

    const article = await getUserArticles(id)

    return {
        title: `Listes des articles de l'utilisateur ${id}`,
        description: `Visionner les ${article.length} articles de l'utilisateur ${id}`,
    }
}

const getUserArticles = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, {
        cache: 'force-cache',
    })
    const articles = response.json();

    return articles;
}

const UserArticles = async ({ params }) => {
    const id = params.id;

    const articles = await getUserArticles(id);

    return (
        <div>
            <main>
                <h1>User Articles</h1>
                {articles.map(article => (
                    Article({article})
                ))}
            </main>
        </div>
    );
};

export default UserArticles;