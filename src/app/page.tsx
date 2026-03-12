import Container from "@/app/_components/container";
import { getLatestSettings } from "@/lib/getSettings";
import { AboutBody } from "@/app/_components/about-body";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
  const { aboutMe } = getLatestSettings();
  const content = await markdownToHtml(aboutMe || "");

  return (
    <main>
      <Container>
        <article className="mb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-mm-dark)] mb-2">
            About Me
          </h1>
          <div className="max-w-3xl mt-6">
            <AboutBody content={content} />
          </div>
        </article>
      </Container>
    </main>
  );
}
