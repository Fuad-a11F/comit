import stiker1 from '../stikers/kite_PNG44.png'


export default function Smiles({smilesClose}) {
    return (
        <div className="smiles">
            <button onClick={smilesClose}>s</button>
            <div>
                <img src={stiker1} width='160' height='220' alt=""/>
            </div>
        </div>
    )
}