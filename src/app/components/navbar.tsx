import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="flex flex-col md:flex-row md:justify-start md:gap-4 gap-2">
        <Link href="/api/bilAgare" className="hover:underline">Bilägare</Link>
        <Link href="/bilar" className="hover:underline">Bilar</Link>
        <Link href="/servis-arende" className="hover:underline">Servis Ärende</Link>
        <Link href="/bilproblem" className="hover:underline">Bilproblem</Link>
        <Link href="/verkstader" className="hover:underline">Verkstäder</Link>
      </div>
    </nav>
  );
};

export default Navbar;
