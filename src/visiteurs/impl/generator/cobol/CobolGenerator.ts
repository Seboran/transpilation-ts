import AbstractVisiteur from '../../AbstractVisiteur'
import CobolOrchestrateur from '../../orchestrateur/cobol/CobolOrchestrateur'

export default class CobolGenerator extends AbstractVisiteur<string> {
  constructor() {
    const orchestrateur = new CobolOrchestrateur()
    super(orchestrateur.orchestre)
  }
}
