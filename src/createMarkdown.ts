import fs from 'fs'

export default function insertCodeToMarkdown(
  codejs: string,
  codecobol: string,
  filePath: string,
): void {
  // Ajouter le code source au contenu markdown
  const markdownContent = `\n\`\`\`js\n${codejs}\n\`\`\`\n\n\`\`\`cobol\n${codecobol}\n\`\`\``

  // Écrire le nouveau contenu dans le fichier markdown
  fs.writeFileSync(filePath, markdownContent)
}
