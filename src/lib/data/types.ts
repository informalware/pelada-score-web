/**
 * Guarda dados de usuário que permitam ele a ser
 */
export type User = {
    id: number;

    name: string;
    bio: string;
    at: string;
    email: string;
}

/**
 * Objeto com dados de uma partida
 */
export type Match = {
    id: number, 
    
    home: Team, 
    visitor: Team, 
    started_at: Date,
    finished: Date | undefined
}

/**
 * Equipe (basicamente a lista de jogadores) de uma partida
 */
export type Team = {
    id: number,
    name: string,
    league: string
}

/**
 * Jogador, junção de um usuário com suas estatísticas de jogo
 */
export type Player = {
    user: User,
    stats: MatchStats
}

/**
 * Estatísticas de partida para um jogador
 */
export type MatchStats = {
    goals: number,
    assists: number | undefined,
    keeper: boolean | undefined
    yellow_cards: 0 | 1 | 2 | undefined,
    red_card: boolean | undefined,
    injury: boolean | undefined
};
