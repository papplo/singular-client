import React from 'react';

export default class ModalFX extends React.Component {
  constructor(props){
    super(props)
  }
  elements = {
    target: 'data-target',
    active: 'is-active',
    button: '.modal-button',
    close: '.modal-close',
    buttonClose: '.modal-button-close',
    background: '.modal-background'
  }

  bgImage = {
    backgroundImage: 'url('+ this.props.content.body.img_url +')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    Transition: 'all',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  shouldComponentUpdate(nextProps) {
    // FIXME: this won't rerender if the open prop is changing as well as another prop does.
    if (nextProps.open !== this.props.open) {
      if (nextProps.open) this.openModal()
      else this.closeModal();
      return false;
    }
    return true;
  }

  onClickEach = (selector, callback) => {
      const arr = document.querySelectorAll(selector);
      arr.forEach((el) => {
          el.addEventListener('click', callback);
      })
  }

  events = () => {
    this.onClickEach(this.elements.button, this.openModal);
    this.onClickEach(this.elements.close, this.closeModal);
    this.onClickEach(this.elements.buttonClose, this.closeAll);
    this.onClickEach(this.elements.background, this.closeModal);
  }

  _keyHandling = function _keyHandling(key) {
    if (key.keyCode == 27) {
      this.closeAll();
    }
  }

  closeAll = () => {
    const openModal =
      document.querySelectorAll('.' + this.elements.active);
    openModal.forEach((modal) => {
      modal.classList.remove(this.elements.active);
    })
    this.unFreeze();
  }

  openModal = () => {
    this.refs.modal.classList.add(this.elements.active);
    this.freeze();
  }

  closeModal = () => {
    this.refs.modal.classList.remove(this.elements.active);
    this.unFreeze();
  }

  freeze = () => {
    const html = document.getElementsByTagName('html')[0]
    html.style.overflow = "hidden";
    const body = document.getElementsByTagName('body')[0]
    body.style.overflowY = "scroll";
  }

  unFreeze = () => {
    document.getElementsByTagName('html')[0]
    .style.overflow = "";
    document.getElementsByTagName('body')[0]
    .style.overflowY = "";
  }

  render () {
    return (
      <div ref="modal" id="modal-id" className="modal modal-fx-3dSignDown">
        <div className="modal-background" style={this.bgImage}></div>
        <div className="modal-content is-round">
          <p className="has-text-centered title is-4 has-text-white">Logo Here</p>
          <section className="modal-card-body">
            <div className="content is-round">
              <p className="title is-5">{this.props.content.body.title}</p>
              <p className="subtitle is-6">{this.props.content.body.description}</p>
            </div>
            {this.props.children}
          </section>
        </div>
        <button onClick={() => this.props.onToggle()} className="button modal-close is-large" aria-label="close"></button>
      </div>



    )
  }

}
