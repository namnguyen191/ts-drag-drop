namespace App {
    // AUTOBIND DECORATOR
    export function AutoBind(
        target: any,
        methodName: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        const adjMethod: PropertyDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        };
        return adjMethod;
    }
}
