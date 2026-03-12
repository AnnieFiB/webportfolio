import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function HeroPost({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={process.env.BASE_PATH + coverImage}
          slug={slug}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-12 md:mb-16">
        <div>
          <h3 className="mb-2 text-xl md:text-2xl font-semibold leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="text-[var(--color-mm-link)] hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-sm text-[var(--color-mm-muted)]">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-[var(--color-mm-dark)] text-base leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
