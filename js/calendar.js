document.addEventListener("DOMContentLoaded", function() {
    const calendarFromDate = new VanillaCalendar('#calendarFromDate', {
        actions: {
            clickDay(event, dates) {
                const input = document.getElementById('from-date');
                setSelectedDate(dates.selectedDates[0], input)
            }
        },
    });

    const calendarToDate = new VanillaCalendar('#calendarToDate', {
        actions: {
            clickDay(event, dates) {
                const input = document.getElementById('to-date');
                setSelectedDate(dates.selectedDates[0], input)
            }
        },
    });
    
    calendarFromDate.init();
    calendarToDate.init();

    function closeAllDropdowns() {
        document.querySelectorAll('.header__calendar-dropdown.__opened').forEach(dropdown => {
            dropdown.classList.remove('__opened');
        });
        document.querySelectorAll('[data-role="open"]').forEach(openButton => {
            openButton.disabled = false;
        });
    }

    /**
     * Set selected date
     * 
     * @param {String} calendarDay 
     * @param {Element} inputSelector 
     */
    function setSelectedDate(calendarDay, inputSelector) {
        if (inputSelector) {
            inputSelector.value = calendarDay;
        }
    }

    /**
     * Open calendar dropdown
     * 
     * @param {Element} button 
     */
    function openCalendarDropdown(button) {
        closeAllDropdowns();
        const dateType = button.getAttribute('data-date-type');
        const dropdown = document.querySelector(`.header__calendar-dropdown[data-date-type="${dateType}"]`);
        if (dropdown && !dropdown.classList.contains('__opened')) {
            dropdown.classList.add('__opened');
        }
    }

    /**
     * Close calendar dropdonw
     * 
     * @param {Element} button 
     */
    function closeCalendarDropdown(button) {
        const dateType = button.getAttribute('data-date-type');
        const dropdown = document.querySelector(`.header__calendar-dropdown[data-date-type="${dateType}"]`);
        if (dropdown && dropdown.classList.contains('__opened')) {
            dropdown.classList.remove('__opened');
        }
    }

    document.querySelectorAll('[data-role="open"]').forEach(button => {
        button.addEventListener('click', function() {
            openCalendarDropdown(this);
            this.disabled = true;
        });
    });

    document.querySelectorAll('[data-role="close"]').forEach(button => {
        button.addEventListener('click', function() {
            closeCalendarDropdown(this);
            const dateType = this.getAttribute('data-date-type');
            const openButton = document.querySelector(`.header__calendar-btn_open[data-date-type="${dateType}"]`);
            if (openButton) {
                openButton.disabled = false;
            }
        });
    });
});
