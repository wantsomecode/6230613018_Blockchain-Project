import {useState} from 'react'
import {ethers} from 'ethers';	

const ADDRESS = "0xd81F648aF556FB7107b4Ee4736c7EF6D46A4C3e2";
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
	}
];

let voteContract;
function App() {

	const [text,setText] = useState('');
	const [voteName, setVotename] = useState('');

  async function connect()
  {
    const providers = new ethers.providers.Web3Provider(window.ethereum);
    await providers.send("eth_requestAccounts", []);
    const signer = providers.getSigner();
    voteContract = new ethers.Contract(ADDRESS, ABI, signer);
	console.log("It connect",voteContract);
  }

  async function getVotename(){
	const voteName = await voteContract.getVotename();
	setVotename(voteName);
	console.log("Get vote topic: " + voteName);
  }
  async function getCount(){
	console.log("Get vote topic: " + await voteContract.getCount() )
  }
  async function setUIVotename(){
	const tx = await voteContract.setVotename(text);
	await tx.wait();
	await getVotename();
  }
 
  return (
    <div>
	<center>
		<h1>Vote:{voteName}</h1>
		<button onClick={() => connect()}>Connect</button> <br />
		<input type="text" onChange={(e)=>setText(e.target.value)} />
		<button onClick={() => setUIVotename()}>Set Vote Name</button> <br />
		<button onClick={() => getVotename()}>Get Vote Name</button> <br />
		<button onClick={() => getCount()}>Get Result</button> <br />
		<button>Agree</button>
		<button>Not agree</button> <br />
		<button>Check Number</button> <br />
		<button>Result</button> <br />
	  </center>
    </div>
  )
}

export default App
