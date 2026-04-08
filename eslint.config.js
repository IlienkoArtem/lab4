export default [
    {
        rules: {
            "no-unused-vars": "warn", // попередження про невикористані змінні
            "no-console": "warn",     // попередження про console.log у коді
            "prefer-const": "error",  // помилка, якщо змінна не змінюється, але оголошена через let
            "eqeqeq": "error"         // помилка, якщо використовується == замість ===
        }
    }
];