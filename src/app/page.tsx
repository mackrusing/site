// components
import { CopyLink } from "@/components/copy-link";

export default function HomePage() {
  return (
    <>
      <main className="flex h-dvh w-screen flex-col items-center justify-center lg:text-lg">
        <div className="max-w-screen-md p-5">
          <p className="animate-left a-delay-1">
            <strong>Hi, I&apos;m Mack!</strong> I am an 18-year-old student and
            software engineer currently living in Washington, DC.
          </p>
          <ul className="pt-5">
            <li className="animate-top a-delay-2">
              <a
                className="underline"
                href="https://github.com/mackrusing"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li className="animate-top a-delay-3">
              <CopyLink text="mail@mackk.net">Email</CopyLink>
            </li>
            <li className="animate-top a-delay-4">
              <a
                className="underline"
                href="/mackrusing.asc"
                download="mackrusing.asc"
              >
                Public Key
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
