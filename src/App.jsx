import { useState } from 'react'
import {ethers} from 'ethers';

const ADDRESS = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_voterAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_voterName",
				"type": "string"
			}
		],
		"name": "addVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_choice",
				"type": "bool"
			}
		],
		"name": "doVote",
		"outputs": [
			{
				"internalType": "bool",
				"name": "voted",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_ballotOfficialName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_proposal",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "ballotOfficialAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ballotOfficialName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "finalResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proposal",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"internalType": "enum Ballot.State",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalVote",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalVoter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voterRegister",
		"outputs": [
			{
				"internalType": "string",
				"name": "voterName",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "voted",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
function App() {

  async function connect(){
    const providers = new ethers.providers.Web3Provider(window.ethereum);
    await providers.send("eth_requestAccounts", []);
    const signer = providers.getSigner();
    const BallotContract = new ethers.Contract(ADDRESS, ABI, signer);
    console.log("Hello: ",BallotContract);
  }

  async function startVote(){
    
  }
  
  return (
    <div>
	  <p>
      <button>AddVoter</button>
	  </p>
	  <p>
      <button>DoVote</button>
	  </p>
	  <p>
      <button>EndVote</button>
	  </p>
	  <p>
      <button>StartVote</button>
	  </p>
	  <p>
      <button>OwnerName</button>
	  </p>
	  <p>
      <button>OwnerAddress</button>
	  </p>
	  <p>
      <button>FinalResult</button>
	  </p>
	  <p>
      <button>TotalVoter</button>
	  <button>TotalVote</button>
	  </p>
    </div>
  )
}

export default App
