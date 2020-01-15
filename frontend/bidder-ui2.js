import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-upload/src/vaadin-upload.js';

class BidderUi2 extends PolymerElement {

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
   Tenders
  </vaadin-tab>
  <vaadin-tab>
   Bidder Profile
  </vaadin-tab>
  <vaadin-tab>
   Notifications
  </vaadin-tab>
  <vaadin-tab>
   Bid Track Status
  </vaadin-tab>
 </vaadin-tabs>
 <vaadin-text-field placeholder="Search">
  <iron-icon icon="lumo:search" slot="prefix"></iron-icon>
 </vaadin-text-field>
 <h2>Tender Details</h2>
 <vaadin-vertical-layout style="height:15%; justify-content: space-between; width:50%; align-items: stretch;">
  <vaadin-combo-box placeholder="Basic Tender Details"></vaadin-combo-box>
  <vaadin-combo-box placeholder="Payment Instructions"></vaadin-combo-box>
 </vaadin-vertical-layout>
 <h3>Bid Submission</h3>
 <vaadin-vertical-layout style="justify-content: space-around;height:25%;">
  <vaadin-horizontal-layout style="align-items: center;">
   Submit Technical Documents
   <vaadin-upload></vaadin-upload>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="align-items: center;">
   Submit Financial Documents
   <vaadin-upload></vaadin-upload>
  </vaadin-horizontal-layout>
  <vaadin-button theme="Primary">
   Submit Bid 
  </vaadin-button>
 </vaadin-vertical-layout>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bidder-ui2';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidderUi2.is, BidderUi2);
