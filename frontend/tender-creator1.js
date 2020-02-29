import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-checkbox/src/vaadin-checkbox.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-radio-button/src/vaadin-radio-group.js';
import '@vaadin/vaadin-radio-button/src/vaadin-radio-button.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class TenderCreator1 extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                }
            </style>
<vaadin-app-layout>
 <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
 <vaadin-tabs style="margin : 0 auto; flex : 1;" orientation="vertical" theme="minimal" slot="drawer">
  <vaadin-tab>
   <iron-icon></iron-icon>Create Tender 
  </vaadin-tab>
  <vaadin-tab>
   <iron-icon></iron-icon>Templates 
  </vaadin-tab>
  <vaadin-tab>
   <iron-icon></iron-icon>Draft Tenders 
  </vaadin-tab>
  <vaadin-tab>
   <iron-icon></iron-icon>Republish Tender 
  </vaadin-tab>
 </vaadin-tabs>
 <div>
  <vaadin-vertical-layout style="width:50%;align-items: stretch;">
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Tender Reference Number</label>
    <vaadin-text-field></vaadin-text-field>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Tender Type</label>
    <vaadin-combo-box>
     <vaadin-combo-box-item></vaadin-combo-box-item>
    </vaadin-combo-box>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Form of Contract</label>
    <vaadin-combo-box></vaadin-combo-box>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Number of Cover(s)</label>
    <vaadin-combo-box></vaadin-combo-box>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Tender Category</label>
    <vaadin-combo-box></vaadin-combo-box>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Account Type Head</label>
    <vaadin-combo-box></vaadin-combo-box>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>No. of Bid Openers</label>
    <vaadin-combo-box></vaadin-combo-box>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Should Allow Re-build Submission</label>
    <vaadin-radio-group>
     <vaadin-radio-button checked>
      <label>Yes</label>
     </vaadin-radio-button>
     <vaadin-radio-button checked>
      <label>No</label>
     </vaadin-radio-button>
    </vaadin-radio-group>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Should Allow Withdrawal of Bids</label>
    <vaadin-radio-group>
     <vaadin-radio-button>
      <label>Yes</label>
     </vaadin-radio-button>
     <vaadin-radio-button>
      <label>No</label>
     </vaadin-radio-button>
    </vaadin-radio-group>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Should Allow Offline Submission</label>
    <vaadin-radio-group>
     <vaadin-radio-button>
      <label>Yes</label>
     </vaadin-radio-button>
     <vaadin-radio-button>
      <label>No</label>
     </vaadin-radio-button>
    </vaadin-radio-group>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Should Allow Technical Evaluation</label>
    <vaadin-radio-group>
     <vaadin-radio-button>
      <label>Yes</label>
     </vaadin-radio-button>
     <vaadin-radio-button>
      <label>No</label>
     </vaadin-radio-button>
    </vaadin-radio-group>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Should Allow Mutli Currency</label>
    <vaadin-radio-group>
     <vaadin-radio-button>
      <label>Yes</label>
     </vaadin-radio-button>
     <vaadin-radio-button>
      <label>No</label>
     </vaadin-radio-button>
    </vaadin-radio-group>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between;">
    <label>Payment Method</label>
    <vaadin-radio-group>
     <vaadin-radio-button tabindex="0">
      <label>Online</label>
     </vaadin-radio-button>
     <vaadin-radio-button>
      <label>Offline</label>
     </vaadin-radio-button>
    </vaadin-radio-group>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout>
    <label>Offline Instructions</label>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout>
    <vaadin-checkbox></vaadin-checkbox>
    <label>Small- Small Saving Instruction</label>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout>
    <vaadin-checkbox></vaadin-checkbox>
    <label>BC-Bank Cheque</label>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout>
    <vaadin-checkbox></vaadin-checkbox>
    <label>DD-Demand Draft</label>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout>
    <vaadin-checkbox checked></vaadin-checkbox>
    <label>BG-Bank Guarantee</label>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="align-self: stretch; justify-content: flex-end;">
    <vaadin-button theme="primary" id="vaadinButton">
     Next 
    </vaadin-button>
   </vaadin-horizontal-layout>
  </vaadin-vertical-layout>
 </div>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'tender-creator1';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(TenderCreator1.is, TenderCreator1);
