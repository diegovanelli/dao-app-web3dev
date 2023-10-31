import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      '0x4601dA0eA4704D6730D89a5793eCd449835f9C5a',
      'edition-drop'
    );
    await editionDrop.createBatch([
      {
        name: 'Habanos',
        description: 'Esse NFT vai te dar acesso ao PurrosDAO!',
        image: readFileSync('scripts/assets/habanos.jpg'),
      },
    ]);
    console.log('✅ Novo NFT criado com sucesso no !');
  } catch (error) {
    console.error('falha ao criar o novo NFT', error);
  }
})();
