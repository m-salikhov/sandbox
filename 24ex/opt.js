const yargs = require('yargs');

const argv = yargs
    .option('flag', {
        alias: 'f',
        number: true,
    })
    .argv;

console.log(yargs.argv);
console.log(yargs.argv.flag);

