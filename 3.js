/*

ข้อที่ 3 (เทคนิคการเขียนโปรแกรม): เขียน function extract ด้วยภาษา javascript หรือ
typescript หรือ golang ที จะดึงข้อความที อยู่ระหว่างคําว่า “Hello” กับคําว่า “world” มาให้
(สามารถเชื อถือได้ว่า input จะต้องมีคําว่า Hello กับ world)
ตัวอย่าง
extract(“Hello 1 world”) => ”1”
extract(“Peter Hello Thank you world Pan”) => ”Thank you”

----------------------------------------------------------------------------------------------*/

function extract(str) {
    let firstStr = "Hello"
    let secondStr = "world"
    let firstIndex = str.indexOf(firstStr)
    let secondIndex = str.indexOf(secondStr)
    
    if (firstIndex < 0 || secondIndex < 0) return false
    return str.substring(firstIndex + firstStr.length - 1, secondIndex).trim()
}

console.log(extract("Hello 1 world"))
console.log(extract("Peter Hello Thank you world Pan"))