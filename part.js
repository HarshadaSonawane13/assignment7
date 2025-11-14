// Static participants data with mobile numbers
let participants = {
    clay: [
        { name: "Aarav Patil", email: "aarav@gmail.com", mobile: "9876543210" },
        { name: "Riya Sharma", email: "riya@gmail.com", mobile: "9123456780" }
    ],
    origami: [
        { name: "Kunal Roy", email: "kunal@gmail.com", mobile: "9988776655" },
        { name: "Meera Shah", email: "meera@gmail.com", mobile: "9001122334" }
    ],
    fabric: [
        { name: "Tina Joshi", email: "tina@gmail.com", mobile: "9870011223" },
        { name: "Rohan Kale", email: "rohan@gmail.com", mobile: "9022334455" }
    ]
};

function showParticipants() {
    let eventKey = document.getElementById("eventSelect").value;
    let tbody = document.getElementById("tbody");
    let box = document.getElementById("tableBox");

    if (eventKey === "") {
        box.classList.add("hidden");
        return;
    }

    let list = participants[eventKey];

    tbody.innerHTML = ""; // clear old rows

    list.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td>${p.name}</td>
                <td>${p.email}</td>
                <td>${p.mobile}</td>
            </tr>
        `;
    });

    box.classList.remove("hidden");
}
