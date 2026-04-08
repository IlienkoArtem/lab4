// Функції розрахунку (Бізнес-логіка)
export function calculateDiscount(price, discountPercent) {
    if (price <= 0 || discountPercent > 100) return 0;
    if (discountPercent < 0) return price;
    
    const discountAmount = (price * discountPercent) / 100;
    return parseFloat((price - discountAmount).toFixed(2));
}

export function calculateCashback(finalPrice) {
    if (finalPrice <= 0) return 0;
    return parseFloat((finalPrice * 0.02).toFixed(2));
}

// Логіка інтерфейсу (Додаємо перевірку, щоб тести не падали через відсутність DOM)
if (typeof document !== 'undefined') {
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            const price = parseFloat(document.getElementById('priceInput').value) || 0;
            const discount = parseFloat(document.getElementById('discountInput').value) || 0;

            const final = calculateDiscount(price, discount);
            const cb = calculateCashback(final);

            document.getElementById('finalPrice').textContent = `${final.toFixed(2)} ₴`;
            document.getElementById('cashback').textContent = `${cb.toFixed(2)} ₴`;
        });
    }
}