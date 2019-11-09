const { readFile, writeFile } = require('fs').promises;
const path = require('path');
const resolve = (...filePath) => path.resolve(__dirname, ...filePath);

const comReg = /\/\*[\s\S]+?\*\//g;
const funcReg = /function[\s\S]+?\}/g;

(async () => {
  const target = resolve(__dirname, './code/index.js');
  const com = [];
  const func = [];
  const content = await readFile(target, 'utf-8');

  content.replace(comReg, code => {
    com.push(code);
  });

  content.replace(funcReg, code => {
    func.push(code);
  });

  const result = func.reduce((pre, next, i) => {
    pre.push(com[i] + '-' + next);
    return pre;
  }, []);

  const finalResult = `export default ${JSON.stringify(result)};`;
  await writeFile(resolve('./data.js'), finalResult);
})();