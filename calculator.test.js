import { describe, it, expect } from 'vitest';
import { calculateDiscount, calculateCashback } from './script.js';

describe('Unit-тести калькулятора знижок', () => {
    
    it('має правильно розрахувати знижку 15% від 1000', () => {
        expect(calculateDiscount(1000, 15)).toBe(850);
    });

    it('має повернути 0 при знижці 100%', () => {
        expect(calculateDiscount(500, 100)).toBe(0);
    });

    it('має повернути повну суму при знижці 0%', () => {
        expect(calculateDiscount(500, 0)).toBe(500);
    });

    it('має коректно рахувати кешбек 2%', () => {
        expect(calculateCashback(1000)).toBe(20);
    });

    it('має повертати 0 для від’ємної вартості', () => {
        expect(calculateDiscount(-100, 10)).toBe(0);
    });

    // НАВМИСНА ПОМИЛКА ДЛЯ ПЕРЕВІРКИ CI/CD ПАЙПЛАЙНУ
    it('має обробляти велику кількість знаків після коми', () => {
        // Очікуємо неправильне значення 100 замість реального результату розрахунку
        expect(calculateDiscount(100.55, 10)).toBe(100); 
    });
});