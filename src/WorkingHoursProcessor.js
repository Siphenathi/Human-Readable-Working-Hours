function WorkingHoursProcessor() {

    let _days = Getdays();
    return {
        GetFormatedReadableHours: function (data) {
            let results = '';
            if (data.length == 0) {
                return data;
            }
            if (data.length == 1) {

                return `${data[0].day.toUpperCase()}: ${data[0].from} - ${data[0].to}`;
            }
            else {
                let ArrayWithListOfReadableWorkingHours = [];

                for (let x = 0; x < _days.length; x++) {
                    let currentDay = data.find(a => a.day.toLowerCase() == _days[x].day);


                    if (currentDay != null) {
                        let dayId = _days[x].id;
                        let objectWithReadableWorkingHours = { id: dayId, day: currentDay.day.toUpperCase(), hours: currentDay.from + ' - ' + currentDay.to };

                        if (ArrayWithListOfReadableWorkingHours.length == 0) {
                            ArrayWithListOfReadableWorkingHours.push(objectWithReadableWorkingHours);
                        }
                        else {
                            let lastRecordIndex = ArrayWithListOfReadableWorkingHours.length - 1;
                            let lastRecord = ArrayWithListOfReadableWorkingHours[lastRecordIndex]

                            if ((dayId - 1) == lastRecord.id && lastRecord.hours == (currentDay.from + ' - ' + currentDay.to)) {

                                ArrayWithListOfReadableWorkingHours[lastRecordIndex].id = dayId;
                                ArrayWithListOfReadableWorkingHours[lastRecordIndex].day = lastRecord.day + " - " + currentDay.day.toUpperCase();
                            }
                            else {
                                ArrayWithListOfReadableWorkingHours.push(objectWithReadableWorkingHours);
                            }
                        }
                    }
                }
                results = GetResultsAsString(ArrayWithListOfReadableWorkingHours);
            }
            return results;
        }
    }

    function GetResultsAsString(ArrayWithListOfReadableWorkingHours) {
        let result = '';
        for (let x = 0; x < ArrayWithListOfReadableWorkingHours.length; x++) {

            let daysAndHours = `${ArrayWithListOfReadableWorkingHours[x].day}: ${ArrayWithListOfReadableWorkingHours[x].hours}\n`;
            result += ExtractMiddleDays(daysAndHours);

        }
        return result.trim();
    }

    function ExtractMiddleDays(data) {

        let days = data.substring(0, data.indexOf(":"));

        if (days.length > 9) {
            let firstDay = days.substring(0, 3);
            let lastDay = days.substring(days.length - 3);

            days = firstDay + " - " + lastDay;
            let hours = data.substring(data.indexOf(":"));
            results = days + hours;
            return results;
        }
        return data;
    }

    function Getdays() {

        let days = [{ 'id': 1, 'day': 'mon' },
        { 'id': 2, 'day': 'tue' },
        { 'id': 3, 'day': 'wed' },
        { 'id': 4, 'day': 'thu' },
        { 'id': 5, 'day': 'fri' },
        { 'id': 6, 'day': 'sat' },
        { 'id': 7, 'day': 'sun' }];
        return days;
    }
}