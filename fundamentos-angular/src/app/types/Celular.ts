export interface Celular {
    id: number;
    nome: string;
    descricao?: string; /* para informar que é opcional */
    esgotado: boolean;
}