const { run } = require("hardhat")

async function verify(contractAddress, args) {
    console.log(`Verifying... ${contractAddress} with args ${args.toString()}`)
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (err) {
        console.log(2222)
        if (err.message.toLowerCase().includes("already verified")) {
            console.log("Already verified")
        } else {
            console.log(err)
        }
    }
}

module.exports = { verify }
