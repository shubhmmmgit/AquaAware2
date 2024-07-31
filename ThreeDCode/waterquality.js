document.addEventListener("DOMContentLoaded", function() {
    const indiaMap = document.getElementById("india-map");
    const infoBox = document.getElementById("info-box");
    const stateName = document.getElementById("state-name");
    const waterInfo = document.getElementById("water-info");

    // Data for water info (example data)
    const waterData = {
        "Andhra Pradesh": "Water info for Andhra Pradesh...",
        "Bihar": "Water info for Bihar...",
        // Add data for other states...
    };

    indiaMap.addEventListener("load", function() {
        const svgDoc = indiaMap.contentDocument;
        const states = svgDoc.querySelectorAll("path");

        states.forEach(state => {
            state.addEventListener("mouseover", function() {
                const stateId = state.getAttribute("id");
                stateName.textContent = stateId;
                waterInfo.textContent = waterData[stateId] || "No data available";
                infoBox.style.display = "block";
            });

            state.addEventListener("mousemove", function(event) {
                infoBox.style.top = event.pageY + 15 + 'px';
                infoBox.style.left = event.pageX + 15 + 'px';
            });

            state.addEventListener("mouseout", function() {
                infoBox.style.display = "none";
            });
        });
    });
});

