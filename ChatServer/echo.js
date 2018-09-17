let args = process.argv.slice(2)

if (args.length < 1)
{
    console.log("Usage echo.js text")
    return
}

console.log(args.join(' '))