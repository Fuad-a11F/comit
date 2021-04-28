export default function Modal({ modalOpen, children }) {
    return (
        <div className={modalOpen ? 'modal open' : 'modal'}>
            <div className="modal__body">
                {children}
            </div>
        </div>
    )
}