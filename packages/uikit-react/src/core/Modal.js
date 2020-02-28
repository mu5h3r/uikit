import React from 'react';
import './style/modal.css';


type Props = {
    title?: string,
    style?: Object
}

class Modal extends React.Component<Props> {
    handleClose = (e) => {
        if (!e.target.classList.contains('modal-wrapper')) return;
        const {onClose} = this.props;
        onClose();
    };

    render() {
        const {title, style} = this.props;

        return <div className="modal-wrapper" onClick={this.handleClose}>
            <div className="modal" style={style}>
                {title ? <div className="modal__title">{title}</div> : null}
                <div className="modal__content">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

export default Modal;