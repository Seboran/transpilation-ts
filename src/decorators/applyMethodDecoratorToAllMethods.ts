export function applyMethodDecoratorToAllMethods(decorator: Function) {
  return function (constructor: Function) {
    for (const propertyName of Object.getOwnPropertyNames(
      constructor.prototype
    )) {
      const descriptor = Object.getOwnPropertyDescriptor(
        constructor.prototype,
        propertyName
      )

      // Vérifiez si la propriété est une méthode (et non le constructeur)
      if (
        propertyName !== 'constructor' &&
        typeof descriptor?.value === 'function'
      ) {
        const decoratedDescriptor = decorator(
          constructor.prototype,
          propertyName,
          descriptor
        )
        if (decoratedDescriptor) {
          Object.defineProperty(
            constructor.prototype,
            propertyName,
            decoratedDescriptor
          )
        }
      }
    }
  }
}
