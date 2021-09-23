import React, {useState} from 'react';
import './App.css';
import {Portal} from "./stories/components/Portal";
import {Modal} from "./stories/components/Modal";

function App() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(true)}>show modal</button>
            <Portal id="modal-root">
                {open && <Modal onHide={() => setOpen(false)}/>}
            </Portal>
        </div>
    );
}

export default App;
