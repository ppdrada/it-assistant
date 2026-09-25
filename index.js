process.env.TF_CPP_MIN_LOG_LEVEL = '2';

/*diminiu qtd de mensagens de log 
0 - mostra tudo
1 - esconde INFO
2 - esconde INFO + WARNING
3 - esconde INFO + WARNING + ERROR
*/

import MLWorker from './mlWorker.js';
import { normalizeText } from './utils/textNormalizer.js';


const mlWorker = new MLWorker();


console.log(normalizeText('VPN NÃO CONECTA!!!'));
