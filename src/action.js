const core = require('@actions/core');
const github = require('@actions/github');


async function run() {
    const domainName = core.getInput('domainName');
    console.log(domainName);


    // Now We can use this input in our node-script, handlebar js and more
}

run();