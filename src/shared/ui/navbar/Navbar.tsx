import Link from "next/link";

const Navbar = () => {
  const posts = [1, 2, 3, 4, 5];

  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      {posts.map((id, key) => (
        <li key={key}>
          <Link href={{ pathname: "/post/[id]", query: { id } }}>{id}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Navbar;
