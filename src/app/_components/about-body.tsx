import markdownStyles from "./markdown-styles.module.css";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  content: string;
};

export function AboutBody({ content }: Props) {
  // Use DOMPurify to sanitize the HTML content
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div className="max-w-full mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </div>
  );
}
