// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract PriceFeedTracker is Initializable {
   address private admin;

   function initialize(address _admin) public initializer {
       admin = _admin;
   }

   function getAdmin() public view returns (address) {
       return admin;
   }

   /**
    * Network: BNB Chain Testnet
    * Aggregator: ETH/USD
    * Address: 0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7
    */
   function retrievePrice() public view returns (int) {

       AggregatorV3Interface aggregator = AggregatorV3Interface(

           0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7
       );
       (
           ,
           /*uint80 roundID*/
           int price, /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/
           ,
           ,

       ) = aggregator.latestRoundData();

       return price;
   }
}