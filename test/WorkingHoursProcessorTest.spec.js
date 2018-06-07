describe("WorkingHoursProcessor", function(){
    describe("GetFormatedReadableHours", function(){
        describe("Given an empty array of objects", function(){
            it("Should return empty array", function(){
                //Arrange
                let sut = new WorkingHoursProcessor();
                let data = [];

                //Act
                let actual = sut.GetFormatedReadableHours(data);
                //Assert
                expect(actual).toEqual([]);
            })
        })

    })
})