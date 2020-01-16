import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class BidEvalCommitteeDashboard extends PolymerElement {

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
   Open the assigned bids
  </vaadin-tab>
  <vaadin-tab>
   Administrative Evaluation
  </vaadin-tab>
  <vaadin-tab>
   Technical Evaluation
  </vaadin-tab>
  <vaadin-tab>
   Financial Evaluation
  </vaadin-tab>
 </vaadin-tabs>
 <h3>Assigned Bids</h3>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Bid ID"></vaadin-grid-column>
  <vaadin-grid-column header="Bid Name"></vaadin-grid-column>
  <vaadin-grid-column header="Closing Date"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="4768489"></vaadin-grid-column>
  <vaadin-grid-column header="Steel Pipes"></vaadin-grid-column>
  <vaadin-grid-column header="20-6-20"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="4795968"></vaadin-grid-column>
  <vaadin-grid-column header="Gas Chambers"></vaadin-grid-column>
  <vaadin-grid-column header="15-07-20"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="4568956"></vaadin-grid-column>
  <vaadin-grid-column header="Water Chambers"></vaadin-grid-column>
  <vaadin-grid-column header="30-07-20"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="2563256"></vaadin-grid-column>
  <vaadin-grid-column header="Machinery"></vaadin-grid-column>
  <vaadin-grid-column header="04-08-20"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-horizontal-layout style="justify-content: flex-end;">
  <vaadin-button theme="primary">
   Next
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bid-eval-committee-dashboard';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidEvalCommitteeDashboard.is, BidEvalCommitteeDashboard);
