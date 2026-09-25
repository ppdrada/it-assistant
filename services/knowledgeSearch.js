import fs from 'node:fs';
import { normalizeText } from '../utils/textNormalizer.js';

// base de conhecimento
const knowledge = JSON.parse(
    fs.readFileSync('./data/knowledge.json', 'utf-8')
);


// Procura relacionado ao texto recebido
export function searchKnowledge(userText) {
    const normalizedText = normalizeText(userText);

    const article = knowledge.articles.find(article => {
        return article.keywords.some(keyword => {
            return normalizedText.includes(normalizeText(keyword));
        });
    });

    return article || null;
}