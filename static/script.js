document.addEventListener('DOMContentLoaded', () => {
    const checkPriceBtn = document.getElementById('checkPriceBtn');
    const resultDiv = document.getElementById('result');
    const priceValueSpan = document.getElementById('priceValue');
    
    checkPriceBtn.addEventListener('click', () => {
        const selectedCategory = document.getElementById('category').value;
        const selectedCommodity = document.getElementById('commodity').value;
        
        // You can add more code here to fetch the price from the backend using AJAX
        
        // For now, let's simulate a response with a random price
        const randomPrice = Math.floor(Math.random() * 1000); // Replace this with actual price
        
        priceValueSpan.textContent = randomPrice;
        resultDiv.classList.remove('hidden');
    });
});
