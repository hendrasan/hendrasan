const emoji = require('node-emoji');
const { ReadmeBox } = require('readme-box')

let randomEmoji = emoji.random();

(async function main() {
    await ReadmeBox.updateSection(randomEmoji.emoji, {
        owner: 'hendrasan',
        repo: 'hendrasan',
        token: process.env.GITHUB_TOKEN,
        section: 'emoji'
    });
})();