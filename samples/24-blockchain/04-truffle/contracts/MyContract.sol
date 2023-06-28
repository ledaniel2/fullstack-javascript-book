// contracts/MyContract.sol

pragma solidity ^0.8.4;

contract MyContract {
    string value;

    function set(string memory _value) public {
        value = _value;
    }

    function get() public view returns (string memory) {
        return value;
    }
}
