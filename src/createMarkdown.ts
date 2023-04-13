import fs from 'fs'

export default function insertCodeToMarkdown(
  code: string,
  filePath: string,
  language: string = 'typescript'
): void {
  // Ajouter le code source au contenu markdown
  const markdownContent = `\n\`\`\`${language}\n${code}\n\`\`\``

  // Écrire le nouveau contenu dans le fichier markdown
  fs.writeFileSync(filePath, markdownContent)
}
