import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-checkbox/src/vaadin-checkbox.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';

class BidderUi4 extends PolymerElement {

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
 <h2>Bidder Profile</h2>
 <vaadin-horizontal-layout style="width:50%; justify-content: space-between;">
  <vaadin-vertical-layout style="justify-content: space-around; height:60%;">
   <h3>Bidder Status</h3>
   <vaadin-horizontal-layout style="justify-content: space-around;">
    <vaadin-checkbox></vaadin-checkbox>Active
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout>
    <vaadin-checkbox></vaadin-checkbox>Inactive
   </vaadin-horizontal-layout>
  </vaadin-vertical-layout>
  <vaadin-vertical-layout>
   <h3>Bidder Type</h3>
   <vaadin-horizontal-layout>
    <vaadin-checkbox></vaadin-checkbox>Business
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout>
    <vaadin-checkbox></vaadin-checkbox>Individual
   </vaadin-horizontal-layout>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
 <vaadin-vertical-layout style="width:40%; align-items: stretch; height:40%; justify-content: space-around;">
  <a href="https://vaadin.com">Digital Signature Certificate</a>
  <vaadin-combo-box placeholder="Company Details"></vaadin-combo-box>
  <vaadin-combo-box placeholder="Address Details"></vaadin-combo-box>
  <vaadin-combo-box placeholder="List of Submitted Bids"></vaadin-combo-box>
  <vaadin-combo-box placeholder="Additional Information"></vaadin-combo-box>
 </vaadin-vertical-layout>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bidder-ui4';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidderUi4.is, BidderUi4);
