function Calendar({ date }) {
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота"];
    const weekDay = weekDays[date.getDay()];

    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const month = months[date.getMonth()];

    const monthsSub = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const monthSub = monthsSub[date.getMonth()];

    const currentDate = date.getDate();
    const currentMonthDays = Math.round((new Date(date.getFullYear(), (date.getMonth() + 1), 1) - new Date(date.getFullYear(), date.getMonth(), 1)) / 1000 / 3600 / 24);
    const previousMonthDays = Math.round((new Date(date.getFullYear(), date.getMonth(), 1) - new Date(date.getFullYear(), (date.getMonth() - 1), 1)) / 1000 / 3600 / 24);
    const firstweekDays = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const TableMatrix = [];
    let counter = currentMonthDays;
    let nextMonthCounter = 1;

    for (let i = 1; i < 7; i++) {
        const weekArray = [];
        for (let j = 1; j < 8; j++) {
            if (i === 1) {
                if (j < firstweekDays) {
                    weekArray.push({date: previousMonthDays - (firstweekDays - j - 1), class: "ui-datepicker-other-month"});
                } else if (j === currentDate) {
                    weekArray.push({date: currentMonthDays - (counter - 1), class: "ui-datepicker-today"});
                    counter-=1;
                } else {
                    weekArray.push({date: currentMonthDays - (counter - 1), class: ""});
                    counter-=1;
                }
            } else if (i > 4) {
                if (counter <= 0) {
                    weekArray.push({date: nextMonthCounter, class: "ui-datepicker-other-month"});
                    nextMonthCounter+=1;
                } else if (currentMonthDays - (counter - 1) === currentDate) {
                    weekArray.push({date: currentMonthDays - (counter - 1), class: "ui-datepicker-today"});
                    counter-=1;
                } else {
                    weekArray.push({date: currentMonthDays - (counter - 1), class: ""});
                    counter-=1;
                }
            } else {
                if (currentMonthDays - (counter - 1) === currentDate) {
                    weekArray.push({date: currentMonthDays - (counter - 1), class: "ui-datepicker-today"});
                    counter-=1;
                } else {
                    weekArray.push({date: currentMonthDays - (counter - 1), class: ""});
                    counter-=1;
                }
            }
        }
        TableMatrix.push(weekArray);
    }

    return (
        <>
            <div className="ui-datepicker">
                <div className="ui-datepicker-material-header">
                    <div className="ui-datepicker-material-day">{weekDay}</div>
                    <div className="ui-datepicker-material-date">
                        <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                        <div className="ui-datepicker-material-month">{month}</div>
                        <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
                    </div>
                </div>
                <div className="ui-datepicker-header">
                    <div className="ui-datepicker-title">
                        <span className="ui-datepicker-month">{monthSub}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
                    </div>
                </div>
                <table className="ui-datepicker-calendar">
                    <colgroup>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col className="ui-datepicker-week-end"></col>
                        <col className="ui-datepicker-week-end"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" title="Понедельник">Пн</th>
                            <th scope="col" title="Вторник">Вт</th>
                            <th scope="col" title="Среда">Ср</th>
                            <th scope="col" title="Четверг">Чт</th>
                            <th scope="col" title="Пятница">Пт</th>
                            <th scope="col" title="Суббота">Сб</th>
                            <th scope="col" title="Воскресенье">Вс</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={TableMatrix[0][0].class}>{TableMatrix[0][0].date}</td>
                            <td className={TableMatrix[0][1].class}>{TableMatrix[0][1].date}</td>
                            <td className={TableMatrix[0][2].class}>{TableMatrix[0][2].date}</td>
                            <td className={TableMatrix[0][3].class}>{TableMatrix[0][3].date}</td>
                            <td className={TableMatrix[0][4].class}>{TableMatrix[0][4].date}</td>
                            <td className={TableMatrix[0][5].class}>{TableMatrix[0][5].date}</td>
                            <td className={TableMatrix[0][6].class}>{TableMatrix[0][6].date}</td>
                        </tr>
                        <tr>
                            <td className={TableMatrix[1][0].class}>{TableMatrix[1][0].date}</td>
                            <td className={TableMatrix[1][1].class}>{TableMatrix[1][1].date}</td>
                            <td className={TableMatrix[1][2].class}>{TableMatrix[1][2].date}</td>
                            <td className={TableMatrix[1][3].class}>{TableMatrix[1][3].date}</td>
                            <td className={TableMatrix[1][4].class}>{TableMatrix[1][4].date}</td>
                            <td className={TableMatrix[1][5].class}>{TableMatrix[1][5].date}</td>
                            <td className={TableMatrix[1][6].class}>{TableMatrix[1][6].date}</td>
                        </tr>
                        <tr>
                            <td className={TableMatrix[2][0].class}>{TableMatrix[2][0].date}</td>
                            <td className={TableMatrix[2][1].class}>{TableMatrix[2][1].date}</td>
                            <td className={TableMatrix[2][2].class}>{TableMatrix[2][2].date}</td>
                            <td className={TableMatrix[2][3].class}>{TableMatrix[2][3].date}</td>
                            <td className={TableMatrix[2][4].class}>{TableMatrix[2][4].date}</td>
                            <td className={TableMatrix[2][5].class}>{TableMatrix[2][5].date}</td>
                            <td className={TableMatrix[2][6].class}>{TableMatrix[2][6].date}</td>
                        </tr>
                        <tr>
                            <td className={TableMatrix[3][0].class}>{TableMatrix[3][0].date}</td>
                            <td className={TableMatrix[3][1].class}>{TableMatrix[3][1].date}</td>
                            <td className={TableMatrix[3][2].class}>{TableMatrix[3][2].date}</td>
                            <td className={TableMatrix[3][3].class}>{TableMatrix[3][3].date}</td>
                            <td className={TableMatrix[3][4].class}>{TableMatrix[3][4].date}</td>
                            <td className={TableMatrix[3][5].class}>{TableMatrix[3][5].date}</td>
                            <td className={TableMatrix[3][6].class}>{TableMatrix[3][6].date}</td>
                        </tr>
                        <tr>
                            <td className={TableMatrix[4][0].class}>{TableMatrix[4][0].date}</td>
                            <td className={TableMatrix[4][1].class}>{TableMatrix[4][1].date}</td>
                            <td className={TableMatrix[4][2].class}>{TableMatrix[4][2].date}</td>
                            <td className={TableMatrix[4][3].class}>{TableMatrix[4][3].date}</td>
                            <td className={TableMatrix[4][4].class}>{TableMatrix[4][4].date}</td>
                            <td className={TableMatrix[4][5].class}>{TableMatrix[4][5].date}</td>
                            <td className={TableMatrix[4][6].class}>{TableMatrix[4][6].date}</td>
                        </tr>
                        <tr>
                            <td className={TableMatrix[5][0].class}>{TableMatrix[5][0].date}</td>
                            <td className={TableMatrix[5][1].class}>{TableMatrix[5][1].date}</td>
                            <td className={TableMatrix[5][2].class}>{TableMatrix[5][2].date}</td>
                            <td className={TableMatrix[5][3].class}>{TableMatrix[5][3].date}</td>
                            <td className={TableMatrix[5][4].class}>{TableMatrix[5][4].date}</td>
                            <td className={TableMatrix[5][5].class}>{TableMatrix[5][5].date}</td>
                            <td className={TableMatrix[5][6].class}>{TableMatrix[5][6].date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Calendar