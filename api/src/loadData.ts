import * as fs from 'fs';
import * as path from 'path';

const loadJsonFiles = (filePath: string) => (
    fs.readdirSync(path.resolve(__dirname, filePath))
      .map((name) => name.toLowerCase())
      .map((name) => require(path.join(path.resolve(__dirname, filePath), name)))
);

const sourcePath = '../../JSON';
const destinationPath = '../src/data/documents.json';

try {
    console.log(
        `\n⌛ Loading files from JSON folder ⌛`
    );
    const extractedJson = loadJsonFiles(sourcePath);
    fs.writeFileSync(path.resolve(__dirname, destinationPath), JSON.stringify(extractedJson));  
    console.log(
        `\n File extracted and written successfully 🚀`
    );
    console.log(
        `\n ⚠️  Dont try and open it - The file is far too large it will crash your editor ⚠️`
    );
} catch(e){
    console.log('Error loading files', e);
}