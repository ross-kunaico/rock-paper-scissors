import type { Symbol } from "../types/symbol";

export function determineResult(userSymbol: Symbol, adversarySymbol: Symbol): 'win' | 'lose' | 'draw' {
    if (userSymbol === adversarySymbol) {
        return 'draw';
    }
    if ((userSymbol === 'rock' && adversarySymbol === 'scissors') ||
        (userSymbol === 'scissors' && adversarySymbol === 'paper') ||
        (userSymbol === 'paper' && adversarySymbol === 'rock')) {
        return 'win';
    }
    return 'lose';
}
