
document.addEventListener('DOMContentLoaded', function () {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const daysElement = document.getElementById('days');
    const monthElement = document.getElementById('month');
    const yearElement = document.getElementById('year');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function renderCalendar(month, year) {
        daysElement.innerHTML = '';
        monthElement.textContent = monthNames[month];
        yearElement.textContent = year;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            daysElement.appendChild(emptyDiv);
        }

        
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                dayDiv.classList.add('current-day');
            }
            daysElement.appendChild(dayDiv);
        }
    }

    prevMonthButton.addEventListener('click', () => {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthButton.addEventListener('click', () => {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
});
