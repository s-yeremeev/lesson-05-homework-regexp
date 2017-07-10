const text = "Lorem ipsum dolor `1499587246497` -> `https://example.io` sit amet, consectetur adipiscing elit,"
            +" sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "
            +"\"Aug 9, 2016\" => \"file:///some-file.md\" nostrud exercitation ullamco laboris nisi ut aliquip "
            +"\'Wed, 22 Jan 2015 00:00:00 GMT' :: 'http://something.com.ua' ex ea commodo consequat. Duis auteirure dolor "
            +"in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
            +"Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."


/**регулярное выражение для поиска всех встречающихся дат в строке по заданному условию */
const regexpData = /(\"|\'|\`)[\w\,\: ]{1,30}(\"|\'|\`)/gi

/**регулярное выражение для поиска всех встречающихся URL в строке по заданному условию */
const regexpUrl = /(->|=>|::)[ ](\"|\'|\`)[\w\:\//\///\.\-\\]{1,}(\"|\'|\`)/gi

const dataArray = text.match(regexpData)
const urlArray = text.match(regexpUrl)

/**удаляем символы ",',` в полученном масиве с датами */
const deletesymboDataInArray = deleteSymbol(dataArray);


/** форматируем даты к MM/DD/YYYY */
const datanewFormat = formaringData(deletesymboDataInArray);


/**Удаляем лишние символы в поле с УРЛ */
const deletesymboURLInArray = deleteSymbol(urlArray);


/**Формируем массив с объектами */
const endArrayObjects = newArrayObject(datanewFormat, deletesymboURLInArray);
console.log(endArrayObjects)






