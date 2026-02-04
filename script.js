function updateAttendance() {
    // Get the current value from the span
    let attendanceSpan = document.getElementById('attendanceVal');
    let currentVal = parseInt(attendanceSpan.innerText);

    // Logic: If it's less than 100, increase it
    if (currentVal < 100) {
        currentVal += 5;
        attendanceSpan.innerText = currentVal;
        
        // Update the visual bar
        const bar = document.getElementById('attendanceBar');
        bar.style.width = currentVal + '%';
        bar.innerText = currentVal + '%';
    } else {
        alert("Full attendance reached!");
    }
}

// Set the initial bar width when page loads
window.onload = function() {
    let initialVal = document.getElementById('attendanceVal').innerText;
    document.getElementById('attendanceBar').style.width = initialVal + '%';
    document.getElementById('attendanceBar').innerText = initialVal + '%';
};