import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={process.env.BASE_PATH + coverImage}
        />
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="text-[var(--color-mm-link)] hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-sm text-[var(--color-mm-muted)] mb-3">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-[var(--color-mm-dark)] text-base leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
