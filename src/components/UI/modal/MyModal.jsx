import React from 'react'

import classes from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

const rootClasses = [classes.myModal]
if (visible) {
  rootClasses.push(classes.active)
}

  return (
    <section className={rootClasses.join(' ')} onClick={() => setVisible(!visible)}>
      <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </section>
  );
}

export default MyModal;
