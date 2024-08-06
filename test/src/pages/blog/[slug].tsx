import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Post: {slug}</p>;
}
