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
                    let currentDay = data.find(a => a.day == _days[x].day);


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

            result += `${ArrayWithListOfReadableWorkingHours[x].day}: ${ArrayWithListOfReadableWorkingHours[x].hours}\n`;

        }
        return result.trim();
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