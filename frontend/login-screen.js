import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/src/vaadin-password-field.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class LoginScreen extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%; justify-content: center; align-items: center;">
 <label>Login </label>
 <vaadin-text-field placeholder="username"></vaadin-text-field>
 <vaadin-password-field label="Password" placeholder="Enter password" value="secret1"></vaadin-password-field>
 <vaadin-button theme="primary" id="vaadinButton">
  Login 
 </vaadin-button>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'login-screen';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(LoginScreen.is, LoginScreen);
