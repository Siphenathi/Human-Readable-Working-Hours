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

                HandleOrderOfDays(data, ArrayWithListOfReadableWorkingHours);
                results = GetResultsAsString(ArrayWithListOfReadableWorkingHours);
            }
            return results;
        }
    }

    function HandleOrderOfDays(data, ArrayWithListOfReadableWorkingHours) {
        for (let position = 0; position < _days.length; position++) {
            let currentDay = GetCurrentDay(data, position);
            if (currentDay != null)
                AddCurrentDayToTheObject(position, currentDay, ArrayWithListOfReadableWorkingHours);
        }
    }

    function AddCurrentDayToTheObject(position, currentDay, ArrayWithListOfReadableWorkingHours) {
        {
            let dayId = _days[position].id;
            let objectWithReadableWorkingHours = { id: dayId, day: currentDay.day.toUpperCase(), hours: currentDay.from + ' - ' + currentDay.to };
            if (ArrayWithListOfReadableWorkingHours.length == 0) {
                AddCurrentDayFromObjectToArray(objectWithReadableWorkingHours, ArrayWithListOfReadableWorkingHours);
            }
            else {
                let lastRecordIndex = ArrayWithListOfReadableWorkingHours.length - 1;
                let lastRecordedDay = ArrayWithListOfReadableWorkingHours[lastRecordIndex];

                if (CurrentDayFollowsLastRecordedDayWithSameWorkingHours(dayId, lastRecordedDay, currentDay)) {

                    AppendCurrentDayToTheArray(ArrayWithListOfReadableWorkingHours, lastRecordIndex, dayId, lastRecordedDay, currentDay);
                }
                else {
                    AddCurrentDayFromObjectToArray(objectWithReadableWorkingHours, ArrayWithListOfReadableWorkingHours);
                }
            }
        }
    }

    function CurrentDayFollowsLastRecordedDayWithSameWorkingHours(dayId, lastRecordedDay, currentDay) {
        return (dayId - 1) == lastRecordedDay.id && lastRecordedDay.hours == (currentDay.from + ' - ' + currentDay.to);
    }

    function AppendCurrentDayToTheArray(ArrayWithListOfReadableWorkingHours, lastRecordIndex, dayId, lastRecord, currentDay) {
        ArrayWithListOfReadableWorkingHours[lastRecordIndex].id = dayId;
        ArrayWithListOfReadableWorkingHours[lastRecordIndex].day = lastRecord.day + " - " + currentDay.day.toUpperCase();
    }

    function AddCurrentDayFromObjectToArray(objectWithReadableWorkingHours, ArrayWithListOfReadableWorkingHours) {
        ArrayWithListOfReadableWorkingHours.push(objectWithReadableWorkingHours);
    }

    function GetCurrentDay(data, x) {
        var currentDay = data.find(a => a.day.toLowerCase() == _days[x].day);
        return currentDay;
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