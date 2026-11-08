import { normalizeText } from './textNormalizer.js';

// Recebe uma lista de frases e devolve a lista de palavras únicas
export function buildVocabulary(texts) {
    const words = new Set(); // Set não aceita repetidos

    for (const text of texts) {
        // 'Meu PC não liga!' -> 'meu pc nao liga' -> ['meu', 'pc', 'nao', 'liga']
        const palavras = normalizeText(text).split(' ');

        for (const palavra of palavras) {
            words.add(palavra); // se a palavra já estiver no Set, ele ignora
        }
    }

    return [...words]; // transforma o Set de volta em array
}

// Recebe uma frase e o vocabulário, devolve um array de 0 e 1
export function textToVector(text, vocabulary) {
    const palavras = normalizeText(text).split(' ');

    // Uma posição para cada palavra do vocabulário (one-hot, igual ao exemplo-00):
    // 1 se a palavra aparece na frase, 0 se não aparece.
    // Palavras da frase que não estão no vocabulário são ignoradas.
    return vocabulary.map(palavra => (palavras.includes(palavra) ? 1 : 0));
}
