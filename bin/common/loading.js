import {
    Logger,
} from './index.js'
import ora from 'ora';

class Loading {
    spinner = null
    start(type,text,loadingColor="yellow") {
        this.spinner = ora();
        this.spinner.color = loadingColor;
        this.spinner.text = Logger.text(type,text);
    }

    stop() {
        this.spinner.stop();
    }
}

export {
    Loading
}