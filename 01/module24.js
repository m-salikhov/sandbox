const yargs = require('yargs');
const fs = require('fs/promises');
const path = require('path');

const argv = yargs
    .command(['create-react-component <componentName> [pathSave]', 'crc'], 'Create new react component', {
        arrow: {
            alias: 'a',
            default: false,
            boolean: 'true'
        },
        function: {
            alias: 'f',
            default: false,
            boolean: 'true'
        },
        class: {
            alias: 'c',
            default: false,
            boolean: 'true'
        },
        pathSave: {
            default: ''
        }
    }, (yargs) => {
        let arrowComp = `import React from 'react';\n\nexport const ${yargs.componentName} = (props) => {\n\treturn (\n\t\t<div>\n\n\t\t</div>\n\t);\n}`
        let funcComp = `import React from 'react';\n\nexport default function ${yargs.componentName}(props) {\n\treturn(\n\t\t<div>\n\n\t\t</div>\n\t);\n}`
        let classComp = `import React from 'react';\n\nexport default class ${yargs.componentName} extends React.Component {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\n\t\t\t</div>\n\t\t);\n\t}\n}`

        if (yargs.arrow === true) fs.writeFile(path.join(__dirname,yargs.pathSave, yargs.componentName + '.js'), arrowComp,  (err) => {
            if (err) console.error(err);
            });
        if (yargs.function === true) fs.writeFile(path.join(__dirname,yargs.pathSave, yargs.componentName + '.js'), funcComp,  (err) => {
            if (err) console.error(err);
            });
        if (yargs.class === true) fs.writeFile(path.join(__dirname,yargs.pathSave, yargs.componentName + '.js'), classComp,  (err) => {
            if (err) console.error(err);
            });
        }
    )

    .argv


