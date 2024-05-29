import React from "react";

const MyFirstComponent = () => {
    const arr = [
        {
            id: 5,
            name: 'parth',
            age: 24
        },
        {
            id: 5,
            name: 'nam',
            age: 29
        },
        {
            id: 5,
            name: 'nam',
            age: 5
        }]


    const a = arr.filter((i) => {
        return i.age === 29;
    })
  

    return (
        <>
            <div>
                <h3>My First Component</h3>
                {
                    <ul>
                        {
                            a.map((i) => {
                                return (
                                    <React.Fragment>
                                        <li>{i.id}</li>
                                        <li>{i.name}</li>
                                        <li>{i.age}</li>
                                    </React.Fragment>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </>

    )
}

export default MyFirstComponent
