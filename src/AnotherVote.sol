// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.11;

contract Ballot{
    //Variables
    struct vote{
        address voterAddress;
        bool choice;
    }
    struct voter{
        string voterName;
        bool voted;
    }
    
    uint private countResult = 0; 
    uint public finalResult = 0; //show result
    uint public totalVoter = 0; //how many people
    uint public totalVote = 0; //vote from people

    address public ballotOfficialAddress;
    string public ballotOfficialName;
    string public proposal;

    mapping(uint => vote) private votes;
    mapping(address => voter) public voterRegister;

    enum State {Created, Voting, Ended}
    State public state;

    //Modifiers
    modifier condition(bool _condition){
        require(_condition);
        _;
    }
    modifier onlyOfficial(){
        require(msg.sender == ballotOfficialAddress);
        _;
    }
    modifier inState(State _state){
        require(state == _state);
        _;
    }
    //Events

    //Functions
    constructor(
        string memory _ballotOfficialName,string memory _proposal)
    {
        ballotOfficialAddress = msg.sender;
        ballotOfficialName = _ballotOfficialName; //Name of vote
        proposal = _proposal; //Purpose of this vote

        state = State.Created; 
    }   
        //add voter insert address of vother and add with owner of vote
    function addVoter(address _voterAddress,string memory _voterName)
        public
        inState(State.Created)
        onlyOfficial
    {
        voter memory v;
        v.voterName = _voterName;
        v.voted = false;
        voterRegister[_voterAddress] = v;
        totalVoter++;

    }

    function startVote() 
        public
        inState(State.Created)
        onlyOfficial
    {
        state = State.Voting;
    }

    //vote with voter address but can vote depend on vote is avaliable of not
    function doVote(bool _choice) 
        public
        inState(State.Voting)
        returns (bool voted)
    {
        bool found = false;
        if (bytes(voterRegister[msg.sender].voterName).length != 0
        && !voterRegister[msg.sender].voted){
            voterRegister[msg.sender].voted = true;
            vote memory v;
            v.voterAddress = msg.sender;
            v.choice = _choice;
            if(_choice){
                countResult++;
            }
            votes[totalVote] = v;
            totalVote++; 
            found = true;
        }
        return found;
    }
    function endVote()
    public 
    inState(State.Voting) 
    onlyOfficial
    {
        state = State.Ended;
        finalResult = countResult;        
    }
}