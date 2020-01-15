import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';

class BidEvalCommitteeMonitoring extends PolymerElement {

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
   View all bids
  </vaadin-tab>
  <vaadin-tab>
   Assign Experts
  </vaadin-tab>
  <vaadin-tab>
   Track the status of bids
  </vaadin-tab>
 </vaadin-tabs>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="BIdder Name"></vaadin-grid-column>
  <vaadin-grid-column header="Status"></vaadin-grid-column>
  <vaadin-grid-column header="Time of bid submission"></vaadin-grid-column>
  <vaadin-grid-column header="Score"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="John Boo"></vaadin-grid-column>
  <vaadin-grid-column header="Okay"></vaadin-grid-column>
  <vaadin-grid-column header="15-08-20"></vaadin-grid-column>
  <vaadin-grid-column header="A+"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Michael Robbins"></vaadin-grid-column>
  <vaadin-grid-column header="Okay"></vaadin-grid-column>
  <vaadin-grid-column header="15-08-20"></vaadin-grid-column>
  <vaadin-grid-column header="A+"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Alex Robson"></vaadin-grid-column>
  <vaadin-grid-column header="Blocked"></vaadin-grid-column>
  <vaadin-grid-column header="15-08-20"></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Bob Robson"></vaadin-grid-column>
  <vaadin-grid-column header="Okay"></vaadin-grid-column>
  <vaadin-grid-column header="15-08-20"></vaadin-grid-column>
  <vaadin-grid-column header="A+"></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bid-eval-committee-monitoring';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidEvalCommitteeMonitoring.is, BidEvalCommitteeMonitoring);
