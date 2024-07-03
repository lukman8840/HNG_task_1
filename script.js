
window.onload = function() {
    
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    const now = new Date();
    
    currentTimeElement.textContent = `Current Time (UTC): ${now.toUTCString().slice(17, 25)}`;
    currentDayElement.textContent = `Current Day: ${now.toUTCString().slice(0, 3)}`;
};
