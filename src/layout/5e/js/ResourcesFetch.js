const resourcesTree = {
  race:{dev:"resources/spells.json",prod:""}
}

const getResource = (type) => {
  const env = !process.env.NODE_ENV || process.env.NODE_ENV === "development"
  const resources = resourcesTree[type]
  return require(env?resources.dev:resources.prod);
}