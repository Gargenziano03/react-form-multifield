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

const initialFormData = {
    name: '',
    image: '',
    contenuto: '',
    categoria: '',
    tag: ''

}
export default function AppMain() {

    const [articoli, setArticoli] = useState(articoliBlog)
    const [newArticoli, setNewArticoli] = useState('')
    const [formData, setFormData] = useState(initialFormData)

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

    function handleFormSubmit(e) {
        e.preventDefault
    }

    function handleFormField(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
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

                <div className="p-1 mb-2 bg-light ">
                    <div className="container-fluid d-flex">
                        <p className="col-md-8 fs-4 ">
                            clicca il bottone per aggiungere un articolo
                        </p>
                        <button className="btn btn-primary btn-lg " type="button" popovertarget="off-canvas-form">
                            Aggiungi
                        </button>
                    </div>
                </div>

                <div id="off-canvas-form" popover='true' className="p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>aggiungi un nuovo articolo </h3>
                        <button className="btn btn-primary btn-lg " type="button" popovertarget="off-canvas-form" popovertargetaction='hide'>
                            chiudi
                        </button>
                    </div>

                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                aria-describedby="articolo"
                                placeholder="articolo"
                                value={formData.name}
                                onChange={handleFormField}
                            />
                            <small id="namehelpId" className="form-text text-muted"></small>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input
                                type="text"
                                className="form-control"
                                name="image"
                                id="image"
                                aria-describedby="image"
                                placeholder="/images"
                                value={formData.image}
                                onChange={handleFormField}
                            />
                            <small id="imagehelpId" className="form-text text-muted"></small>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="categoria" className="form-label">Categoria</label>
                            <select className="categoria" id="categoria">
                                <option value={formData.categoria} onChange={handleFormField}>Seleziona Categoria</option>
                                <option value={formData.categoria} onChange={handleFormField}>tecnologia</option>
                                <option value={formData.categoria} onChange={handleFormField}>storia</option>

                            </select>
                            <small id="categoriahelpId" className="form-text text-muted"></small>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input"
                                type="checkbox" value={formData.tag}
                                onChange={handleFormField}
                                id="tag" />
                            <label className="form-check-label" htmlFor=""> available </label>
                        </div>

                        <button type="submit">
                            save
                        </button>


                    </form>
                </div>


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