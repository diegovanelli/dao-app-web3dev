import { AddressZero } from '@ethersproject/constants';
import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: 'Membro da PurrosDAO 2',
      description: 'A DAO dos amantes de charrutos',
      image: readFileSync('scripts/assets/purros.png'),
      primary_sale_recipient: AddressZero,
    });

    const editionDrop = await sdk.getContract(editionDropAddress, 'edition-drop');
    const metadata = await editionDrop.metadata.get();
    
    console.log(
      '✅ Contrato editionDrop implantado com sucesso, endereço:',
      editionDropAddress,
    );
    console.log(
      '✅ bundleDrop metadados:',
      metadata,
    );
  } catch (error) {
    console.log('falha ao implantar contrato editionDrop', error);
  }
})()