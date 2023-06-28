// test/MyContract.js

const MyContract = artifacts.require("MyContract");

contract("MyContract", accounts => {
    it("should store the string 'Hey there!'", async () => {
        const myContract = await MyContract.deployed();

        // Set myString to "Hey there!"
        await myContract.set("Hey there!", { from: accounts[0] });

        // Get myString from public variable getter
        const storedString = await myContract.get();

        assert.equal(storedString, "Hey there!", "The string was not stored");
    });
});
