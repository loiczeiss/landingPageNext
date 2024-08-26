import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
            <div className="flex justify-between mx-auto items-center mx-8 text-2xl"> <Link href="/">Cloud Corp</Link>

        <div className="text-bold text-2xl"><Link className="mr-8 " href="/performance">
          Performance
        </Link>
        <Link className="mr-8 " href="/reliability">
          Reliability
        </Link>
        <Link className="mr-8 " href="/scale">
          Scale
        </Link></div>
  
      </div>
    </div>
  );
}
