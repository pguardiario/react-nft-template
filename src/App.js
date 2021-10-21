import React, { useState, useEffect } from 'react'
import { FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';
import Nav from './Nav';
import VisibilitySensor from 'react-visibility-sensor';
import WebFont from 'webfontloader';
import './App.css';
import nfts from './nfts.json'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import RubberBand from 'react-reveal/RubberBand';

const RevealContent = ({ isVisible, children, type, className }) => {
  let element = type || <Bounce left/>
  // element.children = children
  return React.createElement(
    element.type,
    element.props,
    children
  )
};

export const Reveal = ({ children, type, className }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <RevealContent isVisible={isVisible} type={type} className={className}>{children}</RevealContent>
    </VisibilitySensor>
  );
};


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka', 'Rum Raisin']
      }
    });
  }, []);

  return (


    <div className="App">
      {/* https://source.unsplash.com/random */}
      <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-800">
        <div className="container flex mx-auto w-full py-5">
          {/* eslint-disable-next-line */}
          <a name="Top"/>
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
          <div className="container mx-auto w-full">
            <Nav />
            <div className="w-1/2 text-left select-none font-raisin text-7xl text-white"> Welcome </div>
            <div className="w-1/2 text-left select-none font-raisin text-2xl mt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
            <a href="#Mint" className="px-4 py-2 shadow-2xl drop-shadow-2xl border-2 border-gray-900 bg-yellow-500 rounded ml-3">Mint Now!</a>
            </div>


          </div>
        </div>
      </div>

      <div className="bg-booyah bg-cover">
        <div className="bg-opacity-60 bg-gray-800">
          {/* eslint-disable-next-line */}
          <a name="Tokens" />
          <Reveal type={<Fade left/>} from={{ y: 1800 }} to={{ y: 0 }} className="container mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(0, 5).map(nft => <div className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-black rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade left/>} from={{ y: 1800 }} to={{ y: 0 }} className="container mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(5, 10).map(nft => <div className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-black rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade left/>} from={{ y: 1800 }} to={{ y: 0 }} className="container mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(10, 15).map(nft => <div className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-black rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>


        </div>
      </div>
      {/* Roadmap */}
      <div className="bg-black text-white">
        <div className="container mx-auto w-full pt-2 pb-5">
          {/* eslint-disable-next-line */}
          <a name="Roadmap" />
          <Reveal from={{ y: 1800 }} to={{ y: 0 }} className="bg-black pt-10 flex">
            <div className="bg-gray-900 z-0 w-5/6 m-auto rounded mt-10 text-white">
              <div className="mx-10 p-5 pb-0 flex">
                <div className="text-2xl mr-3 text-pink-600 text-bold text-mono">.01</div> <div className="text-2xl text-bold text-mono">Launch Roadmap</div><br />
              </div>
              <div className="mx-10 p-5 flex">
                <div className="text-lg text-bold text-mono text-left">Quality comes first. The goal is to make our first drop as cool as possible so we can have freedom to develop the universe. We're still working on a number of rarity criteria, as well as a lot of new Lore concepts. The drop release date will be announced as soon as the project's quality and technical aspects are fully progressed. We also need to work hard with our community to make Discord and Twitter even cooler with new additions throughout time.</div>
              </div>
            </div>
          </Reveal>
          <Reveal from={{ y: 1800 }} to={{ y: 0 }} className="bg-black flex mb-10">
            <div className="bg-gray-900 z-0 w-5/6 m-auto rounded mt-10 text-white">
              <div className="mx-10 p-5 pb-0 flex">
                <div className="text-2xl mr-3 text-pink-600 text-bold text-mono">.02</div> <div className="text-2xl text-bold text-mono">Step 2</div><br />
              </div>
              <div className="mx-10 p-5 flex">
                <div className="text-lg text-bold text-mono text-left">Quality comes first. The goal is to make our first drop as cool as possible so we can have freedom to develop the universe. We're still working on a number of rarity criteria, as well as a lot of new Lore concepts. The drop release date will be announced as soon as the project's quality and technical aspects are fully progressed. We also need to work hard with our community to make Discord and Twitter even cooler with new additions throughout time.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      {/* Roadmap */}
      <div className="bg-giraffe bg-cover text-black pb-10">
        <div className="container mx-auto w-full pt-2">
          {/* eslint-disable-next-line */}
          <a name="Mint" />
          <Reveal type={<RubberBand/>} className="">
            <div className="bg-green-900 bg-opacity-60 z-0 h-96 w-5/6 m-auto rounded my-3 text-white">
              <div className="mx-10 p-5 pb-0 flex">
                <div className="text-2xl text-bold text-mono">Mint</div><br />
                <button className="px-4 py-2 shadow-2xl drop-shadow-2xl border-2 border-gray-900 bg-yellow-500 rounded ml-3">Connect Wallet</button>
                <button className="px-4 py-2 shadow-2xl drop-shadow-2xl border-2 border-gray-900 bg-yellow-500 rounded ml-3">Mint Tokens</button>
              </div>

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

