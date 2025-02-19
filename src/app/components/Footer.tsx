import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative flex justify-center items-center">
            <div className="semi-circle absolute bg-[#f2f0d5] flex justify-center items-center">
                <Link href="/#header">
                    <div className="arrow up"></div>
                </Link>
            </div>
        </footer>
    );
}