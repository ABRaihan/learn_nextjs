import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

const Footer = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/comments?postId=1", fetcher);

  return <h1>{JSON.stringify(data)}</h1>;
};
export default Footer;
