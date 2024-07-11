import Github from "./github";

export default function Footer() {
    return (
        <footer className="flex justify-end gap-2 w-full py-4 px-16 text-center">
            <span>Created by Aseel Shakra</span>
            <Github />
        </footer>
    );
};