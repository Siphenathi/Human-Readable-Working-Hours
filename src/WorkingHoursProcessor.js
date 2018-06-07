function WorkingHoursProcessor() {
    
let _days = Getdays();

    return {
        GetFormatedReadableHours: function (data) {
            if (data.length == 0) {
                return [];
            }
            return data.length;
        }
    }

     function Getdays(){

        let days = [{'day':'mon'},
                    {'day':'tue'},
                    {'day':'wed'},
                    {'day':'thur'},
                    {'day':'fri'},
                    {'day':'sat'},
                    {'day':'sun'}];
        return days;
                
    }
}