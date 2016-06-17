/**
 * Verifier for name.
 * @param {type} name
 * @returns {undefined}
 */
export function verifyName(name) {
    var requiredNameLength = 1;
    console.log("authenticating " + name);
    return name.length > requiredNameLength;
}