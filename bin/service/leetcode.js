import {
    Loading,
    Ast,
    Logger,
} from '../common/index.js';
import fs from 'fs';
import {
    resolvePath
} from '../utils/index.js'
export const leetcode = (props) => {
    const {
        name
    } = props;
    const loading = new Loading();
    loading.start('info',`收到~收到~正在为您创建【${name}】笔记哈，别着急~`);

    const targetPath = resolvePath(`src/leetcode/${name}`)
    const cliPath = resolvePath(`bin/cli/leetcode-note`)
    // Logger.log('info',targetPath)
    // Logger.log('info',cliPath)
    fs.mkdirSync(targetPath);
    fs.cpSync(cliPath,targetPath,{ recursive: true })
    loading.stop();
}