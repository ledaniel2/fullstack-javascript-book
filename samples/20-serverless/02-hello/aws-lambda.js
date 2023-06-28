exports.handler = async (event) => {
    const name = event.name || "World";
    return `Hello, ${name}!`;
};
