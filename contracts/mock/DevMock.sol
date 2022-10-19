// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DevMock is ERC20 {
	constructor() ERC20("Development Mock", "DEVmock") {}

	function mintArbitrary(address _to, uint256 _amount) public {
		_mint(_to, _amount);
	}
}
