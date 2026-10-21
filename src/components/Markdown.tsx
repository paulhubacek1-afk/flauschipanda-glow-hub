import { marked } from "marked";

export function Markdown({ text }: { text: string }) {
  const html = marked.parse(text ?? "", { async: false, breaks: true }) as string;
  return <div className="prose-glow" dangerouslySetInnerHTML={{ __html: html }} />;
}
