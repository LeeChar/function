const { readFile, writeFile } = require('fs').promises;
const path = require('path');
const resolve = (...filePath) => path.resolve(__dirname, ...filePath);

const comReg = /\/\*[\s\S]+?\*\//g; // 匹配注释
const funcReg = /function[\s\S]+?\}/g; // 匹配函数块

(async () => {
  const target = resolve(__dirname, './code/index.js');
  const com = [];
  const func = [];
  let content = await readFile(target, 'utf-8');

  if (/-/g.test(content)) {
    throw new TypeError('源代码不能包含 "-" 符号');
  }

  // 去掉 @export 那一行
  content = content.replace(/.*@export\s/g, '');

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