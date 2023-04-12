import AdditionNoeud from '../../../../model/AdditionNoeud.model'
import AssignationNoeud from '../../../../model/AssignationNoeud.model'
import ConditionNode from '../../../../model/ConditionNode.model'
import ExpressionsNoeud from '../../../../model/ExpressionsNoeud.model'
import FonctionNoeud from '../../../../model/FonctionNoeud.model'
import LitteralNoeud from '../../../../model/LitteralNoeud.model'
import MultiplicationNoeud from '../../../../model/MultiplicationNoeud.model'
import NoeudModel from '../../../../model/Noeud.model'
import SiNoeud from '../../../../model/SiNoeud.model'
import SoustractionNoeud from '../../../../model/SoustractionNoeud.model'
import SuperieurNoeud from '../../../../model/SuperieurNoeud.model'
import VisiteurNoeud from '../../../VisiteurNoeud'
import { NoeudModelWrapper } from '../../AjouteIdNodeVisiteur'
import AbstractOrchestrateurImpl from '../AbstractOrchestrateurImpl'

export default class AjouterIdOrchestrateur extends AbstractOrchestrateurImpl<
  NoeudModelWrapper<NoeudModel>
> {
  constructor() {
    const visiteurMappings: Array<
      [
        new (...args: any[]) => NoeudModel,
        new (...args: any[]) => VisiteurNoeud<
          NoeudModelWrapper<NoeudModel>,
          NoeudModel
        >
      ]
    > = [
      [
        AdditionNoeud,
        class
          implements
            VisiteurNoeud<NoeudModelWrapper<AdditionNoeud>, AdditionNoeud>
        {
          visit(node: AdditionNoeud): NoeudModelWrapper<AdditionNoeud> {
            const additionWrapper = new NoeudModelWrapper(node)
            additionWrapper.push(node.a)
            additionWrapper.push(node.b)
            return additionWrapper
          }
        },
      ],
      [
        SuperieurNoeud,
        class
          implements
            VisiteurNoeud<NoeudModelWrapper<SuperieurNoeud>, SuperieurNoeud>
        {
          visit(node: SuperieurNoeud): NoeudModelWrapper<SuperieurNoeud> {
            throw new Error('Method not implemented.')
          }
        },
      ],
      [
        ConditionNode,
        class
          implements
            VisiteurNoeud<NoeudModelWrapper<ConditionNode>, ConditionNode>
        {
          visit(node: ConditionNode): NoeudModelWrapper<ConditionNode> {
            throw new Error('Method not implemented.')
          }
        },
      ],
      [
        LitteralNoeud,
        class
          implements
            VisiteurNoeud<NoeudModelWrapper<LitteralNoeud>, LitteralNoeud>
        {
          visit(node: LitteralNoeud): NoeudModelWrapper<LitteralNoeud> {
            throw new Error('Method not implemented.')
          }
        },
      ],
      [
        AssignationNoeud,
        class
          implements
            VisiteurNoeud<
              NoeudModelWrapper<AssignationNoeud>,
              AssignationNoeud
            >
        {
          visit(node: AssignationNoeud): NoeudModelWrapper<AssignationNoeud> {
            throw new Error('Method not implemented.')
          }
        },
      ],
      [
        AssignationNoeud,
        class
          implements
            VisiteurNoeud<
              NoeudModelWrapper<AssignationNoeud>,
              AssignationNoeud
            >
        {
          visit(node: AssignationNoeud): NoeudModelWrapper<AssignationNoeud> {
            throw new Error('Method not implemented.')
          }
        },
      ],
      [
        ExpressionsNoeud,
        class
          implements
            VisiteurNoeud<
              NoeudModelWrapper<ExpressionsNoeud>,
              ExpressionsNoeud
            >
        {
          visit(node: ExpressionsNoeud): NoeudModelWrapper<ExpressionsNoeud> {
            throw new Error('Method not implemented.')
          }
        },
      ],
      [
        SoustractionNoeud,
        class
          implements
            VisiteurNoeud<
              NoeudModelWrapper<SoustractionNoeud>,
              SoustractionNoeud
            >
        {
          visit(node: SoustractionNoeud): NoeudModelWrapper<SoustractionNoeud> {
            throw new Error('Method not implemented.')
          }
        },
      ],
      [
        MultiplicationNoeud,
        class
          implements
            VisiteurNoeud<
              NoeudModelWrapper<MultiplicationNoeud>,
              MultiplicationNoeud
            >
        {
          visit(
            node: MultiplicationNoeud
          ): NoeudModelWrapper<MultiplicationNoeud> {
            throw new Error('Method not implemented.')
          }
        },
      ],
      [
        FonctionNoeud,
        class
          implements
            VisiteurNoeud<NoeudModelWrapper<FonctionNoeud>, FonctionNoeud>
        {
          visit(node: FonctionNoeud): NoeudModelWrapper<FonctionNoeud> {
            throw new Error('Method not implemented.')
          }
        },
      ],
      [
        SiNoeud,
        class implements VisiteurNoeud<NoeudModelWrapper<SiNoeud>, SiNoeud> {
          visit(node: SiNoeud): NoeudModelWrapper<SiNoeud> {
            throw new Error('Method not implemented.')
          }
        },
      ],
    ]
    super(visiteurMappings)
  }
}
