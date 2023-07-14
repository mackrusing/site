//
// HomePage
//  site home
//

// components
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Article from "@/components/article";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Article>
        {/* welcome section */}
        <p>
          Welcome! I'm Mack Rusing (<em>he/him</em>), a 17-year-old web & software developer currently living in Phoenix, Arizona.
        </p>
        <p>
          I consider myself a full-stack developer, but I tend to concentrate more on server-side projects. Currently, I am focusing on API development with Express. You can check out all of my projects <a href="https://github.com/mackrusing" target="_blank" rel="noreferrer noopener">on GitHub</a>
        </p>

        {/* experience */}
        <h2>Experience</h2>
        <p>
          As mentioned above, I am a web & software developer. I am proficient in TypeScript (including JavaScript), Python, Sass (including CSS), and HTML. I also have experience in Java and Rust.
        </p>
        <p>
          Recently, I created a full-stack TypeScript application for an event at the 2023 FBLA National Leadership Conference. The application provides a REST API and front-end web app for students to track involvement in school events. The project is not huge in scope but it demonstrates my capabilities in a wide range of web development. Feel free to check it out <a href="https://github.com/mackrusing/shs-activity-tracker-app" target="_blank" rel="noreferrer noopener">here</a>
        </p>
        <p>
          TypeScript is currently my language of choice, but as I learn Rust in my spare time I hope to be creating more stuff with it soon.
        </p>

        {/* contact */}
        <h2>Contact</h2>
        <p>
          Want to reach out? Send me an email at <a href="mailto:mail@mackk.net">mail@mackk.net</a> (my email is hosted by Proton Mail) or send me a DM (<a href="https://is.nota.live/@mackrusing" target="_blank" rel="noreferrer noopener">@mackrusing@is.nota.live</a> on the fediverse).
        </p>
      </Article>
      <Footer />
    </>
  )
}
