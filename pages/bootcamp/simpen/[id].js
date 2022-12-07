import { useRouter } from "next/router";
import Link from "next/link";

export default function TesLink() {
  const tes = useRouter();
  const { id } = tes.query;
  return (
    <div>
      <div>
        <h1>id:{id}</h1>
      </div>
      <div>
        <Link href={`/bootcamp`}>
          <button className="mt-[10px]  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-1 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Kembali
          </button>
        </Link>
      </div>
    </div>
  );
}
