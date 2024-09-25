let totalBalance = 15000;
function donate(donationId, currentAmount) {
    const donationInput = document.getElementById(`donationAmount${donationId}`);
    const donationAmount = parseInt(donationInput.value, 10) || 0;
    if (donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    if (donationAmount > totalBalance) {
        alert("Balance Insufficient. Please enter an amount less than or equal to your available balance.");
        return;
    }
    const currentDonation = document.getElementById(`currentDonation${donationId}`);
    const newCurrentAmount = currentAmount + donationAmount;
    currentDonation.textContent = `${newCurrentAmount} BDT`;
    totalBalance -= donationAmount;
    const balanceDisplay = document.getElementById("balance");
    balanceDisplay.textContent = `${totalBalance} BDT`;
    addToHistory(donationId, donationAmount);
    openModal();
    donationInput.value = '';
}
function addToHistory(cardId, amount) {
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    listItem.classList.add('bg-white', 'p-4', 'shadow', 'rounded');
    const donationNames = [
        'Flood at Noakhali, Bangladesh',
        'Flood Relief in Feni, Bangladesh',
        'Aid for Injured in the Quota Movement'
    ];
    const date = new Date().toLocaleString();
    listItem.textContent = `${amount} BDT is Donated for ${donationNames[cardId - 1]} on ${date}`;
    historyList.appendChild(listItem);
}
function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
}
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}
document.getElementById('donationBtn').addEventListener('click', function() {
    document.getElementById('donationSection').classList.remove('hidden');
    document.getElementById('historySection').classList.add('hidden');
});
document.getElementById('historyBtn').addEventListener('click', function() {
    document.getElementById('donationSection').classList.add('hidden');
    document.getElementById('historySection').classList.remove('hidden');
});