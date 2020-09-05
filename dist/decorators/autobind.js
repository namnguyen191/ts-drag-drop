// AUTOBIND DECORATOR
export function AutoBind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjMethod = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjMethod;
}
//# sourceMappingURL=autobind.js.map