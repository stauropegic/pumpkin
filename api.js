async function checkStatus() {
    const text = document.getElementById("status");

    try {
        const res = await fetch("https://a.pumpkin.lat/status", {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        text.textContent = "Status: Active";
    } catch (error) {
        console.error("STATUS ERROR:", error);
        text.textContent = "Status: Offline";
    }
}

checkStatus();
setInterval(checkStatus, 30000);