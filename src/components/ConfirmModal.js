import React from 'react'
import Modal from 'react-modal'


const ConfirmModal = (props) => (
    <Modal
        isOpen={!!props.selectedPost}
        onRequestClose={props.onCancelRemove}
        contentLabel='Tem certeza que deseja excluir esse post?'
        closeTimeoutMS={200}
        className='modal'
    >
        <p className='modal-text page-header__title'> Tem certeza que deseja excluir o seguinte post: <span>{props.selectedPost}</span></p>
        <div className='modal-button'>
            <div className='content-container'>
                <button className='button button--secondary button--modal' onClick={props.removePost}>Excluir</button>
            </div>
            <div className='content-container'>
                <button className='button' onClick={props.onCancelRemove}>Cancelar</button>
            </div>

        </div>

    </Modal>

)
const mapDispatchToProps = (dispatch) => ({


})
export default ConfirmModal

