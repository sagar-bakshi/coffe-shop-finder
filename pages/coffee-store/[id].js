import Link from "next/link";
import { useRouter } from "next/router";

export default function CoffeeStore() {
  const router = useRouter();
  return (
    <div>
      Coffee Store
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}
