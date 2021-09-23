import React, {FC} from "react";
import styles from "./Modal.module.css";

type ModalProps = {
    onHide: () => void;
}

export const Modal: FC<ModalProps> = ({onHide}) => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.modalContainer}>
                <div>Modal</div>
                <button onClick={onHide}>hide</button>
            </div>
        </div>
    );
};