import { useState } from "react";
const articoliBlog = [
    "Novità iOS 17",
    "Ottimizzare il PC",
    "Futuro dell'IA",
    "App per Smart Working",
    "Tendenze Tech 2024",
    "Sicurezza Online",
    "Gadget dell'Anno",
    "Smart Home Facile",
    "Proteggi i Dati",
    "Impatto del 5G"
];
export default function AppMain() {

    const [articoli, setArticoli] = useState(articoliBlog)
    const [newArticoli, setNewArticoli] = useState('')
    function addArticolo(e) {
        e.preventDefault()
        setArticoli([
            newArticoli,
            ...articoli
        ])

        setNewArticoli('')
    }

    function handleTrashArticolo(e) {
        const articoloIndex = Number(e.target.getAttribute('data-index'))
        const newArticoli = articoli.filter((articolo, index) => index != articoloIndex)
        console.log(articoloIndex);
        setArticoli(newArticoli)

    }
    return (
        <main>
            <div className="container">

                <form onSubmit={addArticolo}>
                    <label htmlFor="articolo" className="form-label"></label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                            placeholder="Titolo articolo dell'blog"
                            aria-label="Titolo articolo dell'blog"
                            aria-describedby="button-addon2" value={newArticoli}
                            onChange={e => setNewArticoli(e.target.value)}
                        />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
                    </div>
                </form>

                {/*add articolo */}
                <form>
                    <div className="p-1 mb-2 bg-light ">
                        <div className="container-fluid d-flex">
                            <p className="col-md-8 fs-4 ">
                                clicca il bottone per aggiungere un articolo
                            </p>
                            <button className="btn btn-primary btn-lg " type="button">
                                Add
                            </button>
                        </div>
                    </div>

                </form>


                <ul className="list-group">
                    {articoli.map((articolo, index) => <li key={index} className="list-group-item d-flex justify-content-between">
                        {articolo}
                        <button onClick={handleTrashArticolo} data-index={index} className="btn btn-danger">
                            <i className="bi bi-trash "></i>
                        </button>
                    </li>)}
                </ul>
            </div>
        </main>
    )
}