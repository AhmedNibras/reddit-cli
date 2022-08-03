#! /usr/bin/env node

import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

// * parse env vars 
// console.log(process.argv)
const { argv } = yargs(process.argv)


// * init fetch to reddit api

const res = await fetch('https://www.reddit.com/.json')
// console.log(res)
const data = await res.json()
// console.log(data)
const children = data.data.children
const randomPost = children[Math.floor(Math.random() * children.length)]
// console.log(randomIndex)


// * get random post from reddit api response of all post on fron page
const link = `https://reddit.com${randomPost.data.permalink}`
// const post = data.data.children[randomPost] ------ code
// console.log(post)


// * log if --print flag is passed
if (argv.print || argv.p) {
    console.log(`
        title: ${randomPost.data.title}\n
        link: ${link}
        `)
} else {
    // open in browser if not
    open(link)
}