let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const datesContainer = document.querySelector(".calendar-dates");
const currentDateDisplay = document.querySelector(".calendar-current-date");
const navIcons = document.querySelectorAll("#calendar-prev, #calendar-next");

const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const renderCalendar = () => {
    let firstDayIndex = new Date(year, month, 1).getDay();
    let totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    let lastDayIndex = new Date(year, month, totalDaysInMonth).getDay();
    let prevMonthDays = new Date(year, month, 0).getDate();
    let calendarHTML = "";

    calendarHTML += "<tr>";
    for (let i = firstDayIndex; i > 0; i--) {
        let dayNum = prevMonthDays - i + 1;
        let colorClass = getColorClass(dayNum);
        calendarHTML += `<td class="${colorClass} text-gray-300 p-2 border border-[#E6E6E6]">${dayNum}</td>`;
    }

    for (let day = 1; day <= totalDaysInMonth; day++) {
        let isToday =
            day === date.getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
                ? "bg-gray-400 text-white"
                : "";
        let colorClass = getColorClass(day);

        calendarHTML += `<td class="${isToday} ${colorClass} p-2 border border-[#E6E6E6]">${day}</td>`;
        if ((day + firstDayIndex) % 7 === 0) {
            calendarHTML += "</tr><tr>";
        }
    }

    for (let i = lastDayIndex; i < 6; i++) {
        let dayNum = i - lastDayIndex + 1;
        let colorClass = getColorClass(dayNum);
        calendarHTML += `<td class="${colorClass} text-gray-300 p-2 border border-[#E6E6E6]">${dayNum}</td>`;
    }
    calendarHTML += "</tr>";

    currentDateDisplay.innerText = `${months[month]} ${year}`;
    datesContainer.innerHTML = calendarHTML;
};

const getColorClass = (day) => {
    if (day === 6 || day === 7 || day === 8 || day === 9 || day === 10 || day === 13 || day === 14 || day === 15 || day === 20 || day === 21 || day === 23 || day === 24) return "bg-[#9DA5FF] text-white";
    if (day === 16) return "bg-[#FF9CB5] text-white";
    if (day === 17) return "bg-[#C3CE82] text-white";
    if (day === 22) return "bg-[#D6BB96] text-white";
    return "";
};

renderCalendar();

navIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        if (icon.id === "calendar-prev") {
            month--;
            if (month < 0) {
                month = 11;
                year--;
            }
        } else if (icon.id === "calendar-next") {
            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
        }

        renderCalendar();
    });
});