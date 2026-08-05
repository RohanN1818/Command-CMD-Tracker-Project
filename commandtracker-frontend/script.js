
const API_URL = "http://localhost:8081/commands";

// Load commands when page loads
window.onload = function () {
    loadCommands();
};

function loadCommands() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById("commandTable");
            table.innerHTML = "";

            data.forEach(cmd => {
                table.innerHTML += `
                    <tr>
                        <td>${cmd.id}</td>
                        <td>${cmd.name}</td>
                        <td>${cmd.description}</td>
                        <td>${cmd.createdAt}</td>
                        <td>
                            <button onclick="deleteCommand(${cmd.id})">
                                Delete
                            </button>
                        </td>
                    </tr>
                `;
            });
        });
}

function addCommand() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            description: description
        })
    })
    .then(() => {
        loadCommands();
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
    });
}

/* 🔥 DELETE FUNCTION */
function deleteCommand(id) {
    if (confirm("Are you sure you want to delete this command?")) {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            loadCommands(); // reload table after delete
        });
    }
}

/* 🔍 SEARCH FUNCTION */
function filterCommands() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#commandTable tr");

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();

        if (text.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}