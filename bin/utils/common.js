import path from 'path';

export const resolvePath = (filePath) => {
    const __dirname = path.resolve();
    return path.resolve(__dirname, filePath);
}