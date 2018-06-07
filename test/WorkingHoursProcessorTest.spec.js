describe("WorkingHoursProcessor", function () {
    describe("GetFormatedReadableHours", function () {
        describe("Given an empty array of objects", function () {
            it("Should return empty array", function () {
                //Arrange
                let sut = new WorkingHoursProcessor();
                let data = [];

                //Act
                let actual = sut.GetFormatedReadableHours(data);
                //Assert
                expect(actual).toEqual([]);
            })
        })

        describe("Given an array of objects with values", function () {
            it("Should return length of array to confirm if array is not empty", function () {
                //Arrange
                let sut = new WorkingHoursProcessor();
                let data = [{"day": "sat", "from": "10:00", "to": "23:00"},
                            {"day": "mon", "from": "11:00", "to": "23:00"},
                            {"day": "tue", "from": "11:00", "to": "23:00"},
                            {"day": "wed", "from": "11:00", "to": "23:00"},
                            {"day": "thu", "from": "12:00", "to": "23:00"},
                            {"day": "fri", "from": "12:00", "to": "23:00"},
                            {"day": "sun", "from": "11:00", "to": "23:00"}
                           ];

                //Act
                let actual = sut.GetFormatedReadableHours(data);
                //Assert
                expect(actual).toEqual(7);
            })
        })

    })
})