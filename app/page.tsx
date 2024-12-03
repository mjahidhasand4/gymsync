import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

const Home = () => {
  return (
    <main className="h-screen flex items-center justify-center gap-2">
      <Link href="/register" className={buttonVariants()}>Register</Link>
      <Link href="/login" className={buttonVariants({className: "bg-secondary hover:bg-secondary hover:opacity-90"})}>Login</Link>
    </main>
  );
};

export default Home;
