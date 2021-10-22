import React, { useEffect } from 'react'
import { FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';
import Nav from './Nav';
import Mint from './Mint';
import WebFont from 'webfontloader';
import './App.css';
import nfts from './nfts.json'
import Fade from 'react-reveal/Fade';
import Reveal from './Reveal'



function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Rum Raisin']
      }
    });
  }, []);


  let roadmap = [
    {
      step: "01",
      title: "Launch Roadmap",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      step: "02",
      title: "Presale",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      step: "03",
      title: "Open Minting",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      step: "04",
      title: "Giveaways",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      step: "05",
      title: "Something Great",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]

  return (

    <div className="App">
      {/* https://source.unsplash.com/random */}
      <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-800">
        <div className="containerr px-10 flex mx-auto w-full py-5">
          {/* eslint-disable-next-line */}
          <a name="Top" />
          <div className="w-12">
            <div className="text-4xl font-bold">00</div>
            <div className="text-xl font-bold">DAYS</div>
          </div>
          <div className="ml-5 w-12">
            <div className="text-4xl font-bold">00</div>
            <div className="text-xl font-bold">HRS</div>
          </div>
          <div className="ml-5 w-12">
            <div className="text-4xl font-bold">00</div>
            <div className="text-xl font-bold">MIN</div>
          </div>
          <div className="ml-5 w-12">
            <div className="text-4xl font-bold">00</div>
            <div className="text-xl font-bold">SEC</div>
          </div>
          <div className="ml-auto flex flex-nowrap">
            <a href="http://twitter.com"><FaTwitter className="ml-3 mt-3" size={40} /></a>
            <a href="http://facebook.com"><FaFacebook className="ml-3 mt-3" size={40} /></a>
            <a href="http://discord.org"><FaDiscord className="ml-3 mt-3" size={40} /></a>
          </div>
        </div>
      </div>

      <div className="bg-hero bg-cover">
        <div className="bg-opacity-80 bg-blue-600 pb-10">
          {/* eslint-disable-next-line */}
          <a name="Content" />
          <div className="containerr px-10 mx-auto w-full">
            <Nav />
            <div className="w-1/2 text-left select-none font-raisin text-7xl text-white"> Welcome </div>
            <div className="w-1/2 text-left select-none font-raisin text-2xl mt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />
              <a href="#Mint" className="px-4 py-2 shadow-2xl drop-shadow-2xl border-2 border-gray-900 bg-yellow-500 rounded ml-3">Mint Now!</a>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-booyah bg-cover font-roboto text-white">
        <div className="bg-opacity-60 bg-gray-800 py-10">
          {/* eslint-disable-next-line */}
          <a name="Team" />
          <Reveal type={<Fade left />} className="container mx-10 mx-auto w-full">
            <div className="text-white text-5xl">The Team</div>
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              <div className="w-96 bg-1 m-2 p-2 rounded">
                <img alt="NFT" className="shadow-lg mb-5 border border-black rounded max-w-full h-auto align-middle" src={nfts[0].image} />
                <p>Tommy</p>
                <p>Artwork</p>

              </div>
              <div className="w-96 bg-1 m-2 p-2 rounded">
                <img alt="NFT" className="shadow-lg mb-5 border border-black rounded max-w-full h-auto align-middle" src={nfts[1].image} />
                <p>Dick</p>
                <p>Geek</p>
              </div>
              <div className="w-96 bg-1 m-2 p-2 rounded">
                <img alt="NFT" className="shadow-lg mb-5 border border-black rounded max-w-full h-auto align-middle" src={nfts[2].image} />
                <p>Sally</p>
                <p>Shill</p>
              </div>
            </div>
          </Reveal>


        </div>
      </div>
      {/* Roadmap */}
      <div className="bg-black text-white">
        <div className="containerr mx-10 mx-auto w-full pt-2 pb-5">
          {/* eslint-disable-next-line */}
          <a name="Roadmap" />
          {roadmap.map(goal => <Reveal key={goal.step} className="bg-black pt-10 flex">
            <div className="bg-gray-900 z-0 w-5/6 m-auto rounded mt-10 text-white">
              <div className="mx-10 p-5 pb-0 flex">
                <div className="text-2xl mr-3 text-pink-600 text-bold text-mono">{goal.step}</div> <div className="text-2xl text-bold text-mono">{goal.title}</div><br />
              </div>
              <div className="mx-10 p-5 flex">
                <div className="text-lg text-bold text-mono text-left">{goal.text}</div>
              </div>
            </div>
          </Reveal>)}
        </div>
      </div>
      {/* Mint */}
      <Mint/>


      {/* Tokens */}
      <div className="bg-booyah bg-cover">
        <div className="bg-opacity-60 bg-gray-800">
          {/* eslint-disable-next-line */}
          <a name="Tokens" />
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(0, 5).map(nft => <div key={nft.name} className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-black rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(5, 10).map(nft => <div key={nft.name} className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-black rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(10, 15).map(nft => <div key={nft.name} className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-black rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
        </div>
      </div>


      {/* <div className="h-72 bg-white">
        <Reveal from={{ x: -1800 }} to={{ x: 0 }}>
          <div> fade </div>
        </Reveal>
      </div> */}

    </div>


  );
}

export default App;

