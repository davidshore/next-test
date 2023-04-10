import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  return <div className="flex min-h-screen">User with id {id}</div>;
}
