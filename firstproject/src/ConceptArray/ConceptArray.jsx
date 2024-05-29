import React from 'react'

export default function ConceptArray() {
    // Question 1 

    const circleArea = (radius) => Math.PI * radius ** 2;
    const rectangleArea = (length, width) => length * width;
    const triangleArea = (base, height) => 0.5 * base * height;

    // Question 2 

    let a = [1, 2, 3, 4, 5];
    const squareCubeArray = a.map(num => ({ square: num ** 2, cube: num ** 3 }));

    // Question 3

    let b = [11, 22, 33, 44, 55]

    // Question 4
    const numToFind = 44;
    const found = b.includes(numToFind);

    // Question 5
    let c = [10, 20, 30, 40, 50];
    const sum = c.reduce((item, ind) => item + ind, 0);

    // Question 6 
    let arr = [11, 22, 33, 44, 55];
    const even = arr.filter(num => num % 2 === 0);
    const odd = arr.filter(num => num % 2 !== 0);

    // Question 7
    const LeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Question 8
    let mergedArray = [...a, ...b];

    // Question 9
    const student =
    {
        name: "John",
        age: 20,
        grade: "A"
    }

    // Question 10
    const arrs = ["mango", "orange", "mango", "apple", "apple", "pineple", "apple"];
    const counts = {};
    arrs.forEach(element => {
        if (counts[element]) {
            counts[element]++;
        } else {
            counts[element] = 1;
        }
    });






    return (
        <>
            {/* Question=1 */}
            <ul>
                <li> Circle Area is:- {circleArea(5)}</li><br />
                <li> Rectangl Area is:- {rectangleArea(4, 6)}</li><br />
                <li>Tringle Area is:-   {triangleArea(3, 8)}</li>
                <br /><hr />
            </ul>

            {/* Question=2 */}
            {squareCubeArray.map((item, index) => (
                <p key={index}> Square: {item.square}, Cube: {item.cube}</p>
            ))
            }
            <br /><hr />

            {/* Question=3 */}
            {
                b.map((num, index) => (
                    <p key={index}>Index {index + 1}: {num}</p>
                ))

            }
            <br /><hr />

            {/* Question=4*/}
            <p>{found ? `${numToFind} is found` : `${numToFind} is not found`}</p>
            <br /><hr />

            {/* Question=5*/}
            <p>{sum}</p>
            <br /><hr />

            {/* Question=6*/}
            <p>Even No is:- {even}  </p>
            <p>Odd No  is :- {odd}</p>
            <br /><hr />

            {/* Question=7*/}
            <p>2024 is Leap Year:- {LeapYear ? `Yes` : ` no`}</p>
            <br /><hr />

            {/* Question=8*/}
            <p>Merg:- {mergedArray}</p>
            <br /><hr />

            {/* Question=9*/}
            <p>name:- {student.name}</p>
            <p>age:- {student.age}</p>
            <p>grade:- {student.grade}</p>
            <br /><hr />

            {/* Question=10*/}
            <ul>
                {Object.keys(counts).map((key, index) => (
                    <li key={index}>
                        {key}: {counts[key]}
                    </li>
                ))}
            </ul>









        </>
    )
}
