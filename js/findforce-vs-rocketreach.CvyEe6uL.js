async function getMod() {
  return import("./findforce-vs-rocketreach.BBTiDXYy.js");
}
const collectedLinks = [];
const collectedStyles = [];
const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };
export {
  defaultMod as default
};
