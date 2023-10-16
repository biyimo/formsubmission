import {useState} from 'react'

const States = () => {
    const [name,setName] = useState('Olamilekan')
    const [job,setJob] = useState('GOMYCODE')
    const [children,setChildren] = useState('one child')
    const [childJob,setchildJob] = useState('President if Nigeria')

    const election = () => {
        setName('Akinbiyi')
        setJob('BMP')
        setChildren('7')
        setchildJob('God father of APC')
    }


  return (
    <div>
        <h1> {name}, the CEO of {job} and I have {children}. My first son is the {childJob} </h1>
        <button onClick={election}>Click me</button>
    </div>
  )
}

export default States
