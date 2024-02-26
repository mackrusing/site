// components
import { AnimatedItem, CopyLink } from "./client";

export default function HomePage() {
  return (
    <main className="text-md flex min-h-dvh w-screen flex-col items-center justify-center">
      <div className="text-md max-w-screen-md p-5 lg:text-lg">
        <AnimatedItem delay={0} fromDirection="left">
          <p>
            <strong>Hi, I&apos;m Mack!</strong> I am an 18-year-old student and
            software engineer from Phoenix, Arizona.
          </p>
        </AnimatedItem>
        <ul className="pt-5">
          <li>
            <AnimatedItem delay={2} fromDirection="top">
              <a
                className="underline"
                href="https://github.com/mackrusing"
                target="_blank"
              >
                GitHub
              </a>
            </AnimatedItem>
          </li>
          <li>
            <AnimatedItem delay={3} fromDirection="top">
              <CopyLink text="mail@mackk.net">Email</CopyLink>
            </AnimatedItem>
          </li>
          <li>
            <AnimatedItem delay={4} fromDirection="top">
              <a
                className="underline"
                href="/mackrusing.asc"
                download="mackrusing.asc"
              >
                Public Key
              </a>
            </AnimatedItem>
          </li>
        </ul>
      </div>
    </main>
  );
}
