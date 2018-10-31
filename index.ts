const rotateArrayTo = <T>(array: T[], index: number) => {
    const elementsAfterTarget = array.slice(index, array.length);
    const elementsBeforeTarget = array.slice(0, index);

    return [ ...elementsAfterTarget, ...elementsBeforeTarget ];
};

export { rotateArrayTo };
