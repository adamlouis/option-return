const fs = require('fs');
const exec = require('child_process').exec;

const parser = require('./babel/packages/babel-parser/lib');
const generate = require('./babel/packages/babel-generator/lib').default;

const getPaths = (dir) => fs.readdirSync(`${__dirname}/${dir}`).map(n => `${__dirname}/${dir}/${n}`);
const getJSPaths = (dir) => getPaths(dir).filter(n => n.endsWith('.js'));

const build = (path) => {
    const code = fs.readFileSync(path, 'utf8');
    const ast = parser.parse(code)
    const generated = generate(ast);
    
    console.log('generating code... --------------------------------------------------------------')
    console.log(`${path}\n\n`);
    console.log(generated)
    console.log('--------------------------------------------------------------\n\n\n')

    const parts = path.split('/');
    const n = parts[parts.length - 1];

    const genAST = `ast-${n}on`;
    const genJS = `gen-${n}`;

    fs.writeFile(`js-gen/${genAST}`, JSON.stringify(ast, undefined, 2), (e) => console.log(`${e ? 'write error:' : `write success:`} | ${genAST}`));
    fs.writeFile(`js-gen/${genJS}`, generated.code, (e) => console.log(`${e ? 'write error:' : `write success:`} | ${genJS}`));
}

const run = (path) => {
    console.log('\n\n\nrunning code... --------------------------------------------------------------')
    console.log(`${path}\n\n`);
    exec(`node ${path}`,
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error) {
                console.log(error)
            }
            console.log('--------------------------------------------------------------\n\n\n')
    });
}

getPaths('js-gen').map(path => fs.unlink(path, () => { }))

setTimeout(() => {
    getJSPaths('js-samples').map(build);    
}, 1000);
setTimeout(() => {
    getJSPaths('js-gen').map(run);
}, 2000);
