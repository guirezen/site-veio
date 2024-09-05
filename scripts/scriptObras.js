import fs from 'fs';
import path from 'path';

// Função para gerar a galeria
function generateGallery() {
  const baseDir = 'D:/Users/rezen/Trampo/freelances/Site veio/site-veio/src/Assets/Obras';
  const pathWrite = 'D:/Users/rezen/Trampo/freelances/Site veio/site-veio/Utils'

  // Pastas específicas
  const folders = {
    "troncos abertos": "aberto",
    "troncos fechados": "fechado"
  };

  const gallery = [];
  let id = 0;

  // Função para ler arquivos de um diretório
  const getFilesFromDir = (dirPath, type) => {
    const fullPath = path.join(baseDir, dirPath);
    const files = fs.readdirSync(fullPath);
    
    files.forEach(file => {
      gallery.push({
        id: id++,
        url: `src/Assets/Obras/${dirPath}/${file}`,
        type: type
      });
    });
  };

  // Percorre as pastas e gera os objetos no array gallery
  for (const folder in folders) {
    getFilesFromDir(folder, folders[folder]);
  }

  // Converte o array para JSON e escreve no arquivo
  const jsonContent = JSON.stringify({ gallery }, null, 2);
  fs.writeFileSync(path.join(baseDir, 'obras.json'), jsonContent, 'utf8');

  console.log('Arquivo JSON gerado com sucesso!');
}

// Chama a função para gerar a galeria
generateGallery();
