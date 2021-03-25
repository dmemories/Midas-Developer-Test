/*
ข้อที่ 4 (เทคนิคการเขียนโปรแกรม ความใส่ใจในด้าน performance)
จํานวนเฉพาะ (prime) มีลําดับดังนี  2,3,5,7,11,13, ...
เขียน function primeAt ด้วยภาษา javascript หรือ typescript หรือ golang ที่ค้นหาจํานวน
เฉพาะในลําดับที่ กําหนด เช่น
primeAt(1) => 2, primeAt(2) => 3, primeAt(6) => 13, primeAt(100) => 541

----------------------------------------------------------------------------------------------*/

function primeAt(n, primeArr = [2]) {
    if (n <= primeArr.length) return primeArr[n - 1]
    let newNum = primeArr[primeArr.length - 1] + 1
    for (let i = 0; i < primeArr.length; i++) {
        if (newNum % primeArr[i] == 0) {
            i = -1
            newNum++
        }
    }
    primeArr.push(newNum)
    return primeAt(n, primeArr)
}

console.log(primeAt(1))
console.log(primeAt(2))
console.log(primeAt(6))
console.log(primeAt(100))