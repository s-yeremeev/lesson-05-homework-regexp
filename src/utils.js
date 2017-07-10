/**
* Функция formaringData принимает на фход масив с разными форматами дат. и преобразует все к одному - "MM/DD/YYYY"
* На выходе получаем новый массив
*
* @function formaringData
* @param {Array} arr
* @return {Array} resultArr
*/
function formaringData(arr){
    let resultArr = []
    for(let i in arr){
        let str = new Date(arr[i])
        if(str == "Invalid Date"){
            let milisecond = new Date(new Number(arr[i]))
            resultArr.push(milisecond.toLocaleDateString('en-GB'))
        } else {
            resultArr.push(str.toLocaleDateString('en-GB'))
        }       
    }
    return resultArr
}

/**
* Функция deleteSymbol принимает на фход масив с данными и удаляет в строке символы "(\"|\'|\`|-> |=> |:: )"
* На выходе получаем новый массив
*
* @function deleteSymbol
* @param {Array} arr
* @return {Array} resultArr
*/
function deleteSymbol(arr){
    let resultArr = []
    for(let i in arr){
        let string = new String(arr[i])
        let del = string.replace(/(\"|\'|\`|-> |=> |:: )/g,'');
        resultArr.push(del)
    }
    return resultArr
}

/**
* Функция newArrayObject принимает на фход 2 массива с датами и URL и помещает их в новый массив как объекты
* Запись двнных идет по index в массивах
* На выходе получаем новый массив объектов
*
* @function newArrayObject
* @param {Array} arr
* @param {Array} arr2
* @return {Array} resultArr
*/
function newArrayObject(arr1, arr2){
    resultArr = []
    for(let i in arr1){
        resultArr[i] = {
                 date: arr1[i],
                 url: arr2[i]
        }
    }
    return resultArr
}

