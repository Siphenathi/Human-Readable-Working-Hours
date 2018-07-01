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
                expect(actual.length).toBeGreaterThan(0);
            })
        })

        describe("Given an array with working hours of 1 day", function () {
            it("Should return 1 day in a human readable format ", function () {
                //Arrange
                let sut = new WorkingHoursProcessor();
                let data = [{"day": "mon", "from": "11:00", "to": "23:00"}];

                //Act
                let actual = sut.GetFormatedReadableHours(data);
                //Assert
                expect(actual).toEqual("MON: 11:00 - 23:00");
            })
        })

        describe("Given an array of 2 consecutive days with same working hours", function () {
            it("Should return 2 consecutive days in a human readable format", function () {
                //Arrange
                let sut = new WorkingHoursProcessor();
                let data = [{"day": "mon", "from": "11:00", "to": "23:00"},
                            {"day": "tue", "from": "11:00", "to": "23:00"}];

                //Act
                let actual = sut.GetFormatedReadableHours(data);
                //Assert
                expect(actual).toEqual("MON - TUE: 11:00 - 23:00");
            })
        })

        describe("Given an array of 2 consecutive days and 1 non-consecutive day with same working hours", function () {
            it("Should return 2 consecutive days and 1 non-consecutive day in a human readable format", function () {
                //Arrange
                let sut = new WorkingHoursProcessor();
                let data = [{"day": "mon", "from": "11:00", "to": "23:00"},
                            {"day": "tue", "from": "11:00", "to": "23:00"},
                            {"day": "fri", "from": "11:00", "to": "23:00"}
                            ];

                //Act
                let actual = sut.GetFormatedReadableHours(data);
                //Assert
                expect(actual).toEqual("MON - TUE: 11:00 - 23:00\nFRI: 11:00 - 23:00");
            })
        })

        describe("Given an array of 3 consecutive days and 1 non-consecutive day with same working hours", function () {
            it("Should return 3 consecutive days and 1 non-consecutive day in a human readable format", function () {
                //Arrange
                let sut = new WorkingHoursProcessor();
                let data = [{"day": "mon", "from": "11:00", "to": "23:00"},
                            {"day": "tue", "from": "11:00", "to": "23:00"},
                            {"day": "wed", "from": "11:00", "to": "23:00"},
                            {"day": "fri", "from": "11:00", "to": "23:00"}
                            ];

                //Act
                let actual = sut.GetFormatedReadableHours(data);
                //Assert
                expect(actual).toEqual("MON - WED: 11:00 - 23:00\nFRI: 11:00 - 23:00");
            })
        })

        describe("Given an array of 3 consecutive days and 1 non-consecutive day with same working hours", function () {
            it("Should return 3 consecutive days and 1 non-consecutive day in a human readable format", function () {
                //Arrange
                let sut = new WorkingHoursProcessor();
                let data = [{"day": "mon", "from": "11:00", "to": "23:00"},
                            {"day": "Tue", "from": "11:00", "to": "23:00"},
                            {"day": "wed", "from": "11:00", "to": "23:00"},
                            {"day": "THU", "from": "11:00", "to": "23:00"}
                            ];

                //Act
                let actual = sut.GetFormatedReadableHours(data);
                //Assert
                expect(actual).toEqual("MON - THU: 11:00 - 23:00");
            })
        })

    })
})