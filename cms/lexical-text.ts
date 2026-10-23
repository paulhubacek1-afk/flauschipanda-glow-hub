/** Reinen Text aus einem Lexical-Dokument (Rich-Text-Feld) holen – für Wortzählung und Prüfungen. */
type LexicalNode = { text?: string; children?: LexicalNode[] };

export function lexicalToPlainText(value: unknown): string {
  const root = (value as { root?: LexicalNode } | null | undefined)?.root;
  if (!root) return "";
  const out: string[] = [];
  const walk = (node: LexicalNode) => {
    if (typeof node.text === "string") out.push(node.text);
    node.children?.forEach(walk);
    if (node.children) out.push(" ");
  };
  walk(root);
  return out.join("").replace(/\s+/g, " ").trim();
}

export function hasLexicalContent(value: unknown) {
  return lexicalToPlainText(value).length > 0;
}
