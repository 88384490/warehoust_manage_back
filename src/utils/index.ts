const srcDir = ''

import { promises as fs } from 'fs';

/**
 * 异步读取文件内容
 * @param filePath - 要读取的文件路径
 * @returns 返回包含文件内容的 Promise
 */
async function readFileAsync(filePath: string): Promise<string> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return data;
    } catch (error) {
        throw new Error(`Failed to read file: ${error.message}`);
    }
}

/**
 * 异步写入内容到文件
 * @param filePath - 要写入的文件路径
 * @param content - 要写入的内容
 * @returns 返回一个表示写入操作完成的 Promise
 */
async function writeFileAsync(filePath: string, content: string): Promise<void> {
    try {
        await fs.writeFile(filePath, content, 'utf-8');
    } catch (error) {
        throw new Error(`Failed to write file: ${error.message}`);
    }
}
