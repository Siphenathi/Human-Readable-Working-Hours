describe("BumpsChecker", function(){
    describe("CheckSafety", function(){
        describe("Given the smooth road", function(){
            it("Should return you will make it to home", function(){
                //Arrange
                let sut = new BumpsChecker();
                let road = '_____';

                //Act
                let actual = sut.CheckSafety(road);
                //Assert
                expect(actual).toBe('Woohoo!');
            })
        })


        describe("Given a road with 10 bumps", function(){
            it("Should return how many bumps in the road", function(){
                //Arrange
                let sut = new BumpsChecker();
                let road = 'nnnnnnnnnn';

                //Act
                let actual = sut.CheckSafety(road);
                //Assert
                expect(actual).toBe('Woohoo!');
            })
        })


        describe("Given a road with 16 bumps", function(){
            it("Should return car Dead!", function(){
                //Arrange
                let sut = new BumpsChecker();
                let road = '___nnnnn__nnnn__n__nnnnnn';

                //Act
                let actual = sut.CheckSafety(road);
                //Assert
                expect(actual).toBe('Car Dead!');
            })
        })

    })
})