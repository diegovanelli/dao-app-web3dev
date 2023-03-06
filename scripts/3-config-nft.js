import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      '0x211182F60beA019A17ad40A28aD77E055023De3B',
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
