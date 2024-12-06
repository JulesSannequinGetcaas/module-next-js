import Article from '@/components/Article';

export const metadata = {
  title: 'Listes des articles',
  description: 'Voici la liste des articles',
}


const getArticles = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articles = await response.json();

  return articles;
}

const Articles = async () => {
  const articles = await getArticles();
  
  return (
    <div>
      <main>
        <h1>Articles List</h1>
        <div>
          {articles.map(article => (
            Article({article})
          ))}
        </div>
      </main>
    </div>
  );
};

export default Articles;