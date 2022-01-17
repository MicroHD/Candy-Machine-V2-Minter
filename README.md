# Frog Nation Minter

The Frog-Nation-Minter project is designed to let users fork, customize, and deploy their own candy machine ```V2``` mint app to a custom domain, ultra fast.

Built With React NFT/Collectable Candy Machine V2 Frontend Minter basic components ready to go just edit as you like.

A candy machine is an on-chain Solana program (or smart contract) for managing fair mint. Fair mints:

* Start and finish at the same time for everyone.

* Won't accept your funds if they're out of NFTs to sell.

The Frog-Nation-Minter project is meant to be as simple and usable as possible, accessible to everyone from long-time crypto devs to junior React devs with a vague interest in NFTs. Our goal is to empower users to create their own front ends to display, sell, and manage their NFTs as simply as possible by just updating a few styled components and following a well-documented process for setup and shipping.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMicroHD%2FFrog-Nation-Minter)

![alt text](https://github.com/MicroHD/Candy-Machine-V2-Minter/blob/main/Sneek.png)

# Getting Set Up

## *Prerequisites* 

* Ensure you have recent versions of both node and yarn installed.

* Install the Solana Command Line Toolkit [Here](https://docs.solana.com/cli/install-solana-cli-tools).

* Install the Metaplex Command Line Utility [Here](https://docs.metaplex.com/candy-machine-v2/getting-started).


## *Installation*

1. Fork The Project, Then Clone It Into A Folder. Example:  
> git clone https://github.com/MicroHD/Frog-Nation-Minter.git

2. Install The Dependencies. Example:
> cd Frog-Nation-Minter
> yarn install

3. Define Your Environment Variables Using The Instructions Below, And Start Up The Server With ``` npm start ```

4. Edit Components And Home Page Information To Your NFT Project Information 

5. Build The Project. Example:
> yarn build

## Environment Variables

To run the project, first rename the ```.env.template``` file at the root directory to ```.env``` and update the following variables:
> REACT_APP_CANDY_MACHINE_ID=`Replace With Your Candy Machine Address`

This is a Solana account address. You can get the value for this from the ```.cache/temp file.``` This file is created when you run the ```metaplex upload``` command in terminal.

> REACT_APP_SOLANA_NETWORK=__PLACEHOLDER__

This identifies the Solana network you want to connect to. Options are ```devnet```, ```testnet```, and ```mainnet-beta```.

> REACT_APP_SOLANA_RPC_HOST=https://explorer-api.devnet.solana.com

This identifies the RPC server your web app will access the Solana network through. 


# Built For Candy Machine v2 Only 


