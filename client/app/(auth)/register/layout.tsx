import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full">

            <div>

                <header className="flex items-center justify-between px-6 py-3 shadow-md bg-white">

                    <div className="max-w-35.5 cursor-pointer">

                        <Image

                            alt="siut logo"
                            src="/logos/siutLogo.png"
                            width={500}
                            height={500}

                        />

                    </div>

                    <div className="flex items-center gap-5">

                        <p className="font-semibold text-blue-500">Already have an account?</p>

                        <Link href={"/login"} className="px-5 py-2 text-base text-white rounded-lg bg-blue-600">Login</Link>

                    </div>

                </header>

            </div>

            {children}

        </div>
    );
}