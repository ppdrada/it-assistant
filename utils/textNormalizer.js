export function normalizeText(text) { // Normalizando texto
    return text
        .toLowerCase() // converte tudo pra minusculas
        .normalize('NFD') // separa letras dos acentos
        .replace(/[\u0300-\u036f]/g, '') // remove os acentos
        .replace(/[^\w\s]/g, '') // remove pontuacao e caracteres especiais
        .replace(/\s+/g, ' ') // remove espacos duplicados
        .trim(); // remove espaços no inicio e no fim da frase
}