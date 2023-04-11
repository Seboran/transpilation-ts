import AbstractVisiteur from '../../AbstractVisiteur'
import JavascriptOrchestrateur from '../../orchestrateur/js/JavascriptOrchestrateur'

export default class JavascriptGenerator extends AbstractVisiteur<string> {
  constructor() {
    const orchestrateur = new JavascriptOrchestrateur()
    super(orchestrateur.orchestre)
  }
}
