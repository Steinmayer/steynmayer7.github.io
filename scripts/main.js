document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('subscriber-slider');
    const subscriberDisplay = document.getElementById('subscriber-count');
    const priceDisplay = document.getElementById('price-amount');
    const viewSelect = document.getElementById('view-select');
    const body = document.body;

    // Constants
    const PRICE_PER_SUBSCRIBER = 0.03; // Example rate

    // 1. Logic for Pricing
    function updatePricing() {
        // Get value
        const subscribers = parseInt(slider.value);

        // Update subscriber display
        subscriberDisplay.textContent = subscribers;

        // Calculate Price
        // Validating logic: 5000 * 0.03 = 150. Correct.
        const price = Math.round(subscribers * PRICE_PER_SUBSCRIBER);

        // Update price display
        priceDisplay.textContent = `${price} рублей`;
    }

    // Initialize pricing
    updatePricing();

    // Event Listener for Slider
    slider.addEventListener('input', updatePricing);


    // 2. Logic for View Switching

    // Function to apply view class
    function setView(viewMode) {
        // Remove all layout classes
        body.classList.remove('auto-layout', 'desktop-layout', 'mobile-layout');

        if (viewMode === 'auto') {
            body.classList.add('auto-layout');
            // We can also detect what current "auto" resolves to if we want to update the dropdown visually
            // but the requirement is just that dropdown sets the mode.
        } else if (viewMode === 'desktop') {
            body.classList.add('desktop-layout');
        } else if (viewMode === 'mobile') {
            body.classList.add('mobile-layout');
        }
    }

    // Initialize Default State
    // Default to 'auto'
    body.classList.add('auto-layout');

    // Event Listener for Manual Dropdown
    viewSelect.addEventListener('change', (e) => {
        const selectedView = e.target.value;
        setView(selectedView);

        // "State Preservation" is automatic because we are just changing CSS classes.
        // The DOM elements for the slider and text remain untouched.
    });

    // Optional: Update dropdown to 'auto' if user resizes window manually while in auto mode? 
    // No, standard behavior is fine. The requirement says:
    // "Automatic switching ... in manual mode addition ... automatic switching dependent on window size"
    // The implementation of 'auto-layout' class + media queries handles the automatic part.
    // The dropdown overrides it. 
});
