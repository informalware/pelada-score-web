export type Match = {
    id: number, 
    home: string, 
    visitor: string, 
    score: number[],
    started_at: Date,
    finished: Date | undefined
}

/**
 * Representa uma entidade, seja usuário, equipe ou campeonato. 
 * Guarda apenas os dados necessários, demais informações devem ser solicitadas ao back-end sob demanda
 */
export type Entity = {
    type: "profile" | "team" | "championship",
    id: string
    display: string
}