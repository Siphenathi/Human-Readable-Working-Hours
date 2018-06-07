function BumpsChecker() {

    return {
        CheckSafety: function (road) {
            let NumberOfBumps = road.replace(/[^n]/g, "").length
            
            if(NumberOfBumps <= 15){
                return 'Woohoo!'
            }
         return 'Car Dead!';        
        }
    }
}