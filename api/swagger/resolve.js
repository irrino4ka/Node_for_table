const resolve = require('json-refs').resolveRefs;
const YAML = require('js-yaml');
const fs = require('fs');

const root = YAML.load(fs.readFileSync('index.yaml').toString());
const options = {
  processContent: (content) => {
    return YAML.load(content);
  }
};
resolve(root, options)
.then((results) => {
  console.log(YAML.dump(results.resolved));
});