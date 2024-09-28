import { trpc } from "../utils/trpc";
export default function IndexPage() {
  const hello = trpc.helloWorld.useQuery();
  if (!hello.data) return <div className="text-4xl">Loading...</div>;
  return (
    <div className="text-4xl">
      <p>{hello.data}</p>
    </div>
  );
}
