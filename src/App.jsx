import { useState } from 'react'
import {ethers} from 'ethers';	

const ADDRESS = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
const ABI = [
	{
		"inputs": [],
		"name": "checkNum",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "countDown",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "countUp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCount",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVotename",
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
		"inputs": [
			{
				"internalType": "string",
				"name": "_votename",
				"type": "string"
			}
		],
		"name": "setVotename",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_voterNum",
				"type": "int256"
			}
		],
		"name": "setVoterNum",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voteName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
    const voteContact = new ethers.Contract(ADDRESS, ABI, signer);
	console.log("It connect");
    
  }
 
  return (
    <div>
	<center>
		<h1>Vote:</h1>
		<button onClick={()=>connect()}>Connect</button> <br />
		
		<button>Set Vote Name</button> <br />
		<button>Set Number of paticipant</button> <br />
		<button>Agree</button>
		<button>Not agree</button> <br />
		<button>Check Number</button> <br />
		<button>Result</button> <br />
	  </center>
    </div>
  )
}

export default App
