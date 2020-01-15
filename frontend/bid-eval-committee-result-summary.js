import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';

class BidEvalCommitteeResultSummary extends PolymerElement {

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
  <vaadin-grid-column></vaadin-grid-column>
  <vaadin-grid-column header="Last 7 days"></vaadin-grid-column>
  <vaadin-grid-column header="Last Month"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Total Bids"></vaadin-grid-column>
  <vaadin-grid-column header="56"></vaadin-grid-column>
  <vaadin-grid-column header="281"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Accepted BIds"></vaadin-grid-column>
  <vaadin-grid-column header="34"></vaadin-grid-column>
  <vaadin-grid-column header="184"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Rejected Bids"></vaadin-grid-column>
  <vaadin-grid-column header="17"></vaadin-grid-column>
  <vaadin-grid-column header="80"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Bids blocked by violation"></vaadin-grid-column>
  <vaadin-grid-column header="5"></vaadin-grid-column>
  <vaadin-grid-column header="17"></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bid-eval-committee-result-summary';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidEvalCommitteeResultSummary.is, BidEvalCommitteeResultSummary);
