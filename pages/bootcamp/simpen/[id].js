import { useRouter } from "next/router";
import Link from "next/link";

export default function TesLink() {
  const tes = useRouter();
  const { id } = tes.query;
  return (
    <div>
      <h1>id:{id}</h1>
      <h1>gua bagas</h1>
      <Link href={`/bootcamp`}>balik lagi</Link>
    </div>
  );
}
