import React from 'react';
import Icon from './Icon';

import Group from './Group';

import '@mu5h3r/uikit/core/modal.scss';

type Props = {
  title?: string,
  style?: Object,
  className?: string,
  visible?: boolean,
  onClose?: () => void
}

export default function Modal(props: Props) {  
  const {title, style, visible, className, icon} = props;

  const handleClose = (e, checkWrapper) => {    
    if (checkWrapper && !e.target.classList.contains('modal-wrapper')) return;    
    if (props.onClose) props.onClose();
  };

  if (visible === false) return <div />;
  
  const classes = className ? 'modal ' + className : 'modal';  
  return <div className="modal-wrapper" onClick={(e) => handleClose(e, true)}>
    <div className={classes} style={style}>
      { 
        title 
          ? <Group className="modal__title">
              <div>{icon}</div>
              <div>{title}</div>
              <div><span className="modal__close" onClick={(e) => handleClose(e, false)}><Icon name="close" /></span></div>
            </Group> 
          : null 
      }
      <div className="modal__content">
        { props.children }
      </div>
    </div>
  </div>;

}
