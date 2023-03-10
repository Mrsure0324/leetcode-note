import chalk from 'chalk';
import {colorMap} from './index.js'
const Logger = {
    log(type="info",text="") {
        const color = colorMap[type]
        console.log(chalk[color](text));
    },
    text(type="info",text="") {
        const color = colorMap[type]
        return chalk[color](text);
    }
}

export {
    Logger
}