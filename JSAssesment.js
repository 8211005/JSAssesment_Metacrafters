

// 1. create a variable to hold your NFT's
const NFTs = []

// 2. this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyecolor, _shirtype, _accessories) {
   const NFT = {
         "name": _name,
         "eyecolor": _eyecolor,
         "shirtType": _shirtype,
         "accessories": _accessories
   }
   NFTs.push(NFT);
   console.log("Minted: " + _name);
}

// 3. create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i = 0; i < NFTs.length; i++){
   console.log("\nID. " + (i + 1))
   console.log("\nName: " + NFTs[i].name);
   console.log("Eyecolor: " + NFTs[i].eyecolor);
   console.log("Shirt Type: " + NFTs[i].shirtType);
   console.log("accessories: " + NFTs[i].accessories);
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Steve", "Blue", "Hoodie", "Shield")
mintNFT("Stark", "Brown", "Sweatshirt", "Armor")
mintNFT("Clint", "Black", "Leather Jacket", "Bow & Arrow")
mintNFT("Groot", "Groot", "Groot", "Groot")
listNFTs();
getTotalSupply();
