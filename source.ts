
export interface SomeType {
    foo: string;
};

export function someFunc() {
    const x: SomeType = {
        foo: "foo"
    };

    return { x };
}
