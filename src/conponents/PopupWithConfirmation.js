import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit()
            .then(this.close())
        });
    }
    open(cb) {
        super.open();
        this._handleFormSubmit = cb;
    }
}