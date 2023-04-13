import fs from 'fs'

export default function insertCodeToMarkdown(
  codeJavascript: string,
  codeCobol: string,
  filePath: string
): void {
  // Ajouter le code source au contenu markdown
  const markdownContent = `Code javascript\n\`\`\`typescript\n${
    codeJavascript || '// TODO'
  }\n\`\`\`\nCode cobol\n\`\`\`cobol\n${codeCobol || '# TODO'}\n\`\`\``

  // Écrire le nouveau contenu dans le fichier markdown
  fs.writeFileSync(filePath, markdownContent)
}
