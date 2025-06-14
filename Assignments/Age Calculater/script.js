function parseDate(input) {
    if (!input.trim()) return null; // Empty input check

    input = input.replace(/[-,/]/g, ' ').trim(); // Remove separators
    let parts = input.split(/\s+/).map(Number);

    if (parts.length === 3) {
        if (parts[0] > 31) return new Date(parts[0], parts[1] - 1, parts[2]); // yyyy mm dd
        if (parts[2] > 31) return new Date(parts[2], parts[1] - 1, parts[0]); // dd mm yyyy
        if (parts[2] < 100) { 
            let year = parts[2] < 50 ? 2000 + parts[2] : 1900 + parts[2]; // Handle 2-digit year
            return new Date(year, parts[1] - 1, parts[0]); // dd mm yy
        }
    } else if (parts.length === 2) {
        return new Date(2000 + parts[1], parts[0] - 1, 1); // mm yy
    } else if (parts.length === 1) {
        return new Date(parts[0], 0, 1); // yyyy
    }
    return null;
}

function calculateAge() {
    let dobInput = document.getElementById("dobInput").value.trim();
    if (!dobInput) {
        document.getElementById("result").innerText = "Please enter your date of birth!";
        return;
    }

    let dob = parseDate(dobInput);
    if (!dob || isNaN(dob.getTime())) {
        document.getElementById("result").innerText = "Invalid date format!";
        return;
    }

    let today = new Date();
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Handle negative days
    if (ageDays < 0) {
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += prevMonth.getDate();
        ageMonths--;
    }

    // Handle negative months
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}



