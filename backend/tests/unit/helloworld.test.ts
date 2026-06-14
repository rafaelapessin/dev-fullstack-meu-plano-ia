import { describe, it, expect } from 'vitest';

describe('Teste inicial', ()=>{
    // Testar a soma de dois numeros
    it('deve somar dois numeros corretamente', ()=>{
        const resultado = 1 + 1;
        expect(resultado).toBe(2);
    });
})