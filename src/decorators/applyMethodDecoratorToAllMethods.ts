export function applyMethodDecoratorToAllMethods(decorator: Function) {
  return function (c: Function) {
    for (const propertyName of Object.getOwnPropertyNames(c.prototype)) {
      const descriptor = Object.getOwnPropertyDescriptor(c.prototype, propertyName)

      // Vérifiez si la propriété est une méthode (et non le constructeur)
      if (propertyName !== 'constructor' && typeof descriptor?.value === 'function') {
        const decoratedDescriptor = decorator(c.prototype, propertyName, descriptor)
        if (decoratedDescriptor) {
          Object.defineProperty(c.prototype, propertyName, decoratedDescriptor)
        }
      }
    }
  }
}
