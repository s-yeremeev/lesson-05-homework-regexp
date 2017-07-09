const text = "Lorem ipsum dolor `1499587246497` -> `https://example.io` sit amet, consectetur adipiscing elit,"
            +" sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "
            +"\"Aug 9, 2016\" => \"file:///some-file.md\" nostrud exercitation ullamco laboris nisi ut aliquip "
            +"\'Wed, 22 Jan 2015 00:00:00 GMT' :: 'http://something.com.ua' ex ea commodo consequat. Duis auteirure dolor "
            +"in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
            +"Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."


const regexpText = /(\"|\'|\`)[\w\,\: ]{1,}(\"|\'|\`)[ ](->|\=>|::)[ ](\"|\'|\`)[\w\:\//\///\.\-\\]{1,}(\"|\'|\`)/gi
console.log(text.match(regexpText))