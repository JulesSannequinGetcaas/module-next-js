import Link from 'next/link';
import slugify from 'slugify';

const Article = ({ article }) => {
  return (
    <div key={article.id}>
      <Link href={`/articles/${slugify(article.title)}/${article.id}`}>
        <p>{article.title}</p>
      </Link>
    </div>
  );
};

export default Article;