import { describe, expect, test, vi, beforeEach } from 'vitest'
import BoutonHtml from '../../../../model/html/bouton.model'
import ElementsHtml from '../../../../model/html/elements.model'
import IfHtml from '../../../../model/html/if.model'
import LeafHtml from '../../../../model/html/leaf.model'
import BoutonHtmlGenerator from './BoutonHtmlGenerator'
import HtmlOrchestrateur from './HtmlOrchestrateur'

import { Window } from 'happy-dom'
import IfHtmlGenerator from './IfHtmlGenerator'

// Create a new Window instance
const window = new Window()

// @ts-ignore
global.window = window
// @ts-ignore
global.document = window.document
beforeEach(() => {
  BoutonHtmlGenerator.nombreBoutons = 0
  IfHtmlGenerator.nombreIfHtml = 0
  window.document.body.innerHTML = ''
})

describe('Bouton html générateur', () => {
  test('affiche un bouton avec son texte', () => {
    const generateur = new HtmlOrchestrateur()
    const boutonHtml = new BoutonHtml(() => {}, 'yo angelo')
    const render = boutonHtml.accept(generateur)
    expect(render.template).toEqual(`<button btn-1>yo angelo</button>`)
  })
  test('affiche un bouton avec son texte qui affiche du texte quand on clique dessus', () => {
    const generateur = new BoutonHtmlGenerator()
    const spy = vi.fn()
    const boutonHtml = new BoutonHtml(spy, 'yo angelo')
    const render = boutonHtml.accept(generateur)
    window.document.body.innerHTML = render.template
    render.script()
    expect(window.document.body.innerHTML).toEqual(
      `<button btn-1="">yo angelo</button>`,
    )
    // @ts-ignore
    window.document.body.children[0].click()
    expect(spy).toHaveBeenCalledOnce()
  })
})

describe('Éléments html générateur', () => {
  test('affiche deux boutons', () => {
    const spy1 = vi.fn()
    const bouton1 = new BoutonHtml(() => {
      console.log('first call')
      spy1()
    }, 'bouton1')
    const spy2 = vi.fn()
    const bouton2 = new BoutonHtml(() => {
      console.debug('second call"')
      spy2()
    }, 'bouton2')
    const elements = new ElementsHtml(bouton1, bouton2)
    const generateur = new HtmlOrchestrateur()
    const render = elements.accept(generateur)
    window.document.body.innerHTML = render.template
    render.script()
    expect(window.document.body.innerHTML).toMatchInlineSnapshot(
      `"<button btn-1="">bouton1</button><button btn-2="">bouton2</button>"`,
    )
    // @ts-ignore
    window.document.body.children[0].click()
    expect(spy1).toHaveBeenCalledOnce()
    expect(spy2).not.toHaveBeenCalledOnce()
    // @ts-ignore
    window.document.body.children[1].click()
    expect(spy1).toHaveBeenCalledOnce()
    expect(spy2).toHaveBeenCalledOnce()

    /**
     * </script><button btn-4>bouton2</button><script>document.querySelector('[btn-4]').addEventListener('click', () => {
            alert("malibu");
          })</script>"
     */
  })
})

describe('Affichage conditionnel', () => {
  test('affiche du texte si et seulement si on clique sur un bouton', () => {
    let condition = { valeur: false }

    const fonctionsAAppeler: ((valeur: boolean) => void)[] = []
    const proxyCondition = new Proxy(condition, {
      set(target, prop, newValue) {
        // @ts-ignore
        target[prop] = newValue
        fonctionsAAppeler.forEach((f) => f(newValue))
        return true
      },
    })
    const onClickBouton = () => {
      console.log('salut')
      proxyCondition.valeur = !proxyCondition.valeur
    }
    const bouton1 = new BoutonHtml(onClickBouton, 'cliquez moi dessus!')
    const texte = new LeafHtml('un autre texte')
    const ifHtml = new IfHtml(fonctionsAAppeler, texte)
    const generateur = new HtmlOrchestrateur()
    const elements = new ElementsHtml(bouton1, ifHtml)
    const render = elements.accept(generateur)
    window.document.body.innerHTML = render.template
    render.script()
    expect(window.document.body.innerHTML).toMatchInlineSnapshot(
      `"<button btn-1="">cliquez moi dessus!</button><div if-0=""></div>"`,
    )
    // @ts-ignore
    window.document.body.children[0].click()
    expect(window.document.body.innerHTML).toMatchInlineSnapshot(
      `"<button btn-1="">cliquez moi dessus!</button><div if-0="">un autre texte</div>"`,
    )
    // @ts-ignore
    window.document.body.children[0].click()
    expect(window.document.body.innerHTML).toMatchInlineSnapshot(
      `"<button btn-1="">cliquez moi dessus!</button><div if-0=""></div>"`,
    )
  })
})
