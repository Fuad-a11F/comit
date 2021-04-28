export default function FirstPage({ setModalOpen }) {
    return (
        <div className='main__page'>
            <div className="desc">Порадуйте своих друзей и близких <br/> замечательными открытками!</div>
            <button className='new__project' onClick={() => setModalOpen(true)}>Создать</button>
        </div>
    )
}