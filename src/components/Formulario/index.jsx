import { useState } from 'react';
import { useEffect } from 'react';


const Formulario = () => {

    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)
    // let [nome, setNome] = useState('')

    useEffect( () => {
        console.log('o estado nota c mudou para ' + materiaC)
    }, [materiaC])

    const resultado = () => {
        const soma = materiaA + materiaB + materiaC;

        
        const media = soma / 3

        if(media >= 7) {
            return (
                <p>Você foi aprovado</p>
            )
        } else {
            return (
                <p>reprovado</p>
            )
        }
    }

    // const alterNome = (evento) => {
        
    // }

 
    
    return (
        <form>
           <ul>
             {[1,2,3,4,5,6].map(item => (
                <li key={item}>{item}</li>
             ))}
           </ul>
            {/* <input type="text" placeholder='Seu nome' onChange={alterNome} /> */}
            <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(Number(evento.target.value))} />
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(Number(evento.target.value))} />
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(Number(evento.target.value))} />
            <br></br>
            {resultado()}



        </form>
    )
}

export default Formulario;