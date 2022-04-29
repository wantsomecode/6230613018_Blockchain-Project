// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract simpleVote {
    int private count = 0;
    string public voteName;
    int private voterNum = 0;
    int private checkvoterNum = 0;
    constructor(string memory _voteName,int _voterNum){
        voteName = _voteName;
        voterNum = _voterNum;
    }
    function countUp() public {
        count += 1;
        checkvoterNum++;
    }
    function countDown() public {
        count -= 1;
        checkvoterNum++;
    }
    function checkNum() public view returns (bool){
         if(checkvoterNum == voterNum){
            return true;
        }else{
            return false;
        }
    }
    function getCount() public view returns (int) {
         return count;
    }
}