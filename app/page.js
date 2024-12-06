import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Link href="/articles">
          <p>View Articles</p>
        </Link>
        <Link href="/users">
          <p>View users</p>
        </Link>
      </main>
    </div>
  );
}
