export function consolelogDecorator(
  _target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args: any[]) {
    console.log(`Avant l'exécution de la fonction : ${propertyKey}`)
    const result = originalMethod.apply(this, args)
    console.log(`Après l'exécution de la fonction : ${propertyKey}`)
    return result
  }

  return descriptor
}
