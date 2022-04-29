import { useState } from 'react'
import {ethers} from 'ethers';	

const ADDRESS = "";
const ABI = hello;
function App() {

  async function connect(){
    const providers = new ethers.providers.Web3Provider(window.ethereum);
    await providers.send("eth_requestAccounts", []);
    const signer = providers.getSigner();
    const voteContact = new ethers.Contract(ADDRESS, ABI, signer);
    
  }
 
  return (
    <div>
	<center>
		<h1>Vote</h1>
		<button onClick={()=>connect()}>Connect</button> <br />
	  </center>
    </div>
  )
}

export default App
