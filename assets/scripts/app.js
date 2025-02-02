document.getElementById('travel-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const lengthOfStay = document.getElementById('length-of-stay').value;
    const travelDates = document.getElementById('travel-dates').value;
    const activities = document.getElementById('activities').value;

    const itineraryContent = `
        <p><strong>Departure City:</strong> ${departure}</p>
        <p><strong>Destination City:</strong> ${destination}</p>
        <p><strong>Length of Stay:</strong> ${lengthOfStay} days</p>
        <p><strong>Travel Dates:</strong> ${travelDates}</p>
        <p><strong>Activity Preferences:</strong> ${activities}</p>
    `;

    document.getElementById('itinerary-content').innerHTML = itineraryContent;
});
