const log = console.log;
const chalk = require('chalk');

const getNotes = require('./notes')

const msg = getNotes()
log(msg)

log(chalk.magentaBright('Success!'));