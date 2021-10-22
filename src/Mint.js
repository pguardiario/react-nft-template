import React, { useState, useEffect } from "react"
import Web3 from "web3"
import { ethers } from "ethers"
import abi from "./abi"
import config from "./config"
import RubberBand from 'react-reveal/RubberBand';
import Reveal from './Reveal'

const { contractAddress, requiredChainId } = config

const Mint = (props) => {

  const [web3, setWeb3] = useState()
  const [user, setUser] = useState({})

  const connect = async() => {
    const { chainId } = user

    let ok = true

    await window.ethereum.request({
      method: 'eth_requestAccounts',
    }).catch(e => {
      // oh no!
      ok = false
    })

    if (ok && chainId !== requiredChainId) {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: "0x" + requiredChainId.toString(16) }],
      }).catch(e => {
        // oh no!
        ok = false
      })

      if (ok) {
        console.log("Network Switched")
      }
    }
    if(!ok){
      alert(`Connect Failed!`)
    }
  }

  const mint = async (quantity = 1) => {
    const { publicKey, chainId, wei } = user

    let ok = true

    if (!publicKey) {
      await window.ethereum.enable()
      setTimeout(() => mint(quantity), 500)
      return
    }

    if (chainId !== requiredChainId) {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: "0x" + requiredChainId.toString(16) }],
      }).catch(e => {
        // oh no!
        ok = false
      })

      if (ok) {
        console.log("Network Switched")
      } else {
        alert("Mint Failed!")
      }
    }

    const e18 = 1000000000000000000

    const balance = wei / e18
    const price = 0.01
    const gas = 0.0000000005

    if (balance < (price * quantity) + gas) {
      alert("insufficient balance")
      return
    }

    console.log('minting')

    console.log(publicKey)
    // const nonce = await web3.eth.getTransactionCount(publicKey, 'latest')
    // console.log(nonce)

    const contract = new web3.eth.Contract(abi, contractAddress)
    console.log(contract.methods)
    // return
    const tx = {
      from: publicKey,
      to: contractAddress,
      value: ethers.utils.parseEther("0.01")['_hex'],
      gas: ethers.utils.parseEther('' + gas)['_hex'],
      data: contract.methods.safeMint(publicKey, 11, "https://stage.shoot.to/maverick?nft=11").encodeABI()
    }

    console.log(tx)
    // return
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx],
    }).catch(e => {
      console.log(" :( ")
    })
    if (txHash) {
      console.log(txHash)
      console.log("You did it, baby!")
    }
  }

  // let updateUser = (data) =>

  const userFromChain = chainId => {
    web3.eth.getAccounts().then(accounts => {
      if (accounts[0]) {
        web3.eth.getBalance(accounts[0]).then(wei => {
          setUser({ publicKey: accounts[0], chainId, wei })
        })
      }
    })
  }

  const handleAccountsChanged = (accounts) => {
    if(accounts[0]){
      web3.eth.getChainId().then(userFromChain)
    } else {
      setUser({})
    }

    console.log(accounts)
  }

  useEffect(() => {


    if (window.ethereum) {
      if (web3) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', userFromChain)
        web3.eth.getChainId().then(userFromChain)
      } else {
        setWeb3(new Web3(window.ethereum))
      }
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', userFromChain);
      }
    }
    // eslint-disable-next-line
  }, [web3, user])

  return <>
    <div className="bg-giraffe bg-cover text-black pb-10">
      <div className="containerr mx-10 mx-auto w-full pt-2">
        {/* eslint-disable-next-line */}
        <a name="Mint" />
        <Reveal type={<RubberBand />} className="">
          <div className="bg-green-900 bg-opacity-60 z-0 h-96 w-5/6 m-auto rounded my-3 text-white">
            <div className="mx-10 p-5 pb-0 flex">
              <div className="text-2xl text-bold text-mono">Mint</div><br />
              <button onClick={connect} className="px-4 py-2 shadow-2xl drop-shadow-2xl border-2 border-gray-900 bg-yellow-500 rounded ml-3">Connect Wallet</button>
              <button onClick={mint} disabled={!web3} className="px-4 py-2 shadow-2xl drop-shadow-2xl border-2 border-gray-900 bg-yellow-500 rounded ml-3">Mint Tokens</button>
            </div>
          </div>
        </Reveal>
        {JSON.stringify(user)}
      </div>
    </div>

  </>


}

export default Mint

// {"hash":"0xe020381cbca960af566bb9f5298d82822ee4536e26f0d0f426bb525cac7d5ee9","status":"OK"}