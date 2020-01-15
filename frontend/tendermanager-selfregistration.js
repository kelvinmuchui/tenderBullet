import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-checkbox/src/vaadin-checkbox.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-upload/src/vaadin-upload.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class TendermanagerSelfregistration extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-vertical-layout style="width: 100%; height: 100%; align-items: center; justify-content: flex-start;">
 <h2>Welcome to e-Procurement Portal</h2>
 <h3>Supplier Self Registration For GAIL Tenders</h3>
 <vaadin-vertical-layout style="height:82%; width:40%; justify-content: space-between;">
  <vaadin-horizontal-layout style="justify-content: flex-start; align-self: center;">
   <h3>Company Details</h3>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:100%; justify-content: space-between;">
   Name of Company*
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:100%; justify-content: space-between;">
   GAIL Vender Code
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:100%; justify-content: space-between;">
   GAIL Tender Ref
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:100%; justify-content: space-between;">
   Language*
   <vaadin-combo-box></vaadin-combo-box>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:100%; justify-content: space-between;">
   EMail*
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:100%; justify-content: space-between;">
   Mobile No.*
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:100%; justify-content: space-between;">
   Address*
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:100%; justify-content: space-between;">
   GST No.*
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:100%; justify-content: space-between;">
   Country*
   <vaadin-combo-box></vaadin-combo-box>
  </vaadin-horizontal-layout>* Required Entry
  <vaadin-horizontal-layout>
   <vaadin-checkbox></vaadin-checkbox>*I have read the data privacy statement and accept the terms
  </vaadin-horizontal-layout>Required Documents: Scanned Copy of the certificate of Incorporation/GST Registration Certificate
  <vaadin-upload></vaadin-upload>
  <vaadin-horizontal-layout style="width:70%; justify-content: space-between;">
   <vaadin-button theme="primary">
    Submit
   </vaadin-button>
   <vaadin-button theme="primary">
    Reset 
   </vaadin-button>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'tendermanager-selfregistration';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(TendermanagerSelfregistration.is, TendermanagerSelfregistration);
