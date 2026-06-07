// DOM Element Selectors
const habitInput = document.getElementById('habit-input');
const addHabitBtn = document.getElementById('add-habit-btn');
const habitList = document.getElementById('habit-list');
const exportBtn = document.getElementById('export-btn');
const clearBtn = document.getElementById('clear-btn');

// Load habits array from localStorage (or set up empty array fallback)
let habits = JSON.parse(localStorage.getItem('habits')) || [];

// Save active array state back to storage
function saveHabits() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

// Render interface layout elements dynamically
function renderHabits() {
    habitList.innerHTML = '';

    habits.forEach((habit, habitIndex) => {
        // Create Row Wrapper
        const row = document.createElement('div');
        row.classList.add('habit-row');

        // Habit Name Display Text Column
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('habit-title');
        titleSpan.textContent = habit.name;
        row.appendChild(titleSpan);

        // Checkboxes Column Container (Mon-Sun structure)
        const daysContainer = document.createElement('div');
        daysContainer.classList.add('days-checkboxes');

        habit.history.forEach((dayStatus, dayIndex) => {
            const dot = document.createElement('div');
            dot.classList.add('day-dot');
            
            if (dayStatus) {
                dot.classList.add('completed');
            }

            // Click listener mapping to state modifications
            dot.addEventListener('click', () => toggleDay(habitIndex, dayIndex));
            daysContainer.appendChild(dot);
        });
        row.appendChild(daysContainer);

        // Delete Command Element Column
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-habit-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteHabit(habitIndex));
        row.appendChild(deleteBtn);

        // Commit structure elements to active screen list container
        habitList.appendChild(row);
    });
}

// Feature: Add Habit
function addHabit() {
    const text = habitInput.value.trim();
    if (text === '') return;

    habits.push({
        name: text,
        history: [false, false, false, false, false, false, false]
    });

    habitInput.value = '';
    saveHabits();
    renderHabits();
}

// Feature: Toggle target tracker index array position
function toggleDay(habitIndex, dayIndex) {
    habits[habitIndex].history[dayIndex] = !habits[habitIndex].history[dayIndex];
    saveHabits();
    renderHabits();
}

// Feature: Delete active array position containing confirmation verification block
function deleteHabit(habitIndex) {
    const habitName = habits[habitIndex].name;
    const confirmDelete = confirm(`Are you sure you want to delete your progress for "${habitName}"? This cannot be undone.`);
    
    if (confirmDelete) {
        habits.splice(habitIndex, 1);
        saveHabits();
        renderHabits();
    }
}

// Feature: Export your current storage state directly as a downloaded JSON text data object file
// Feature: Export your current data directly into an Excel/Numbers Tabular Spreadsheet
exportBtn.addEventListener('click', () => {
    if (habits.length === 0) {
        alert("No habit data available to export!");
        return;
    }
    
    // 1. Create the spreadsheet table headers
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Habit Name,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday\r\n";
    
    // 2. Loop through habits and convert true/false values into clean readable status words
    habits.forEach(habit => {
        const rowData = habit.history.map(dayStatus => dayStatus ? "Done" : "Pending");
        
        // Combine the habit name with its 7-day row statuses, separated by commas
        const rowString = `"${habit.name}",` + rowData.join(",");
        csvContent += rowString + "\r\n";
    });
    
    // 3. Trigger the spreadsheet download onto your Mac
    const encodedUri = encodeURI(csvContent);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", encodedUri);
    downloadAnchor.setAttribute("download", "my_habits_table.csv");
    
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
});

// Feature: Full reset sequence clearing internal database logs completely
clearBtn.addEventListener('click', () => {
    const doubleCheck = confirm("DANGER: This will delete ALL habits and history permanently. Are you absolutely sure?");
    if (doubleCheck) {
        habits = [];
        localStorage.removeItem('habits');
        renderHabits();
    }
});

// Base Event Listeners Setup
addHabitBtn.addEventListener('click', addHabit);
habitInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addHabit();
});

// Primary initialization display execution loop
renderHabits();