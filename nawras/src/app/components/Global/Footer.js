

export default function Footer() {
    return (
        <footer className="bg-[#efe4b5] text-black p-4 mt-10">
            <div className="max-w-6xl mx-auto text-center">
                <p>
                    &copy; {new Date().getFullYear()} Nawras. All rights reserved.
                </p>
            </div>
        </footer>
    )
}