import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';

class BidEvalCommitteeAssignexpertsUi extends PolymerElement {

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
  </vaadin-tab>
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
 <h3>Expert Details </h3>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="S. No. "></vaadin-grid-column>
  <vaadin-grid-column header="First Name"></vaadin-grid-column>
  <vaadin-grid-column header="Last Name"></vaadin-grid-column>
  <vaadin-grid-column header="User Name"></vaadin-grid-column>
  <vaadin-grid-column header="Bid ID"></vaadin-grid-column>
  <vaadin-grid-column header="Assigned for Evaluation"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="1"></vaadin-grid-column>
  <vaadin-grid-column header="John"></vaadin-grid-column>
  <vaadin-grid-column header="Boo"></vaadin-grid-column>
  <vaadin-grid-column header="jonny81"></vaadin-grid-column>
  <vaadin-grid-column header="798598"></vaadin-grid-column>
  <vaadin-grid-column header="Yes "></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="2"></vaadin-grid-column>
  <vaadin-grid-column header="Mary"></vaadin-grid-column>
  <vaadin-grid-column header="Brown"></vaadin-grid-column>
  <vaadin-grid-column header="missmarry"></vaadin-grid-column>
  <vaadin-grid-column header="489656"></vaadin-grid-column>
  <vaadin-grid-column header="Yes"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="3 "></vaadin-grid-column>
  <vaadin-grid-column header="James"></vaadin-grid-column>
  <vaadin-grid-column header="Morray"></vaadin-grid-column>
  <vaadin-grid-column header="gjames"></vaadin-grid-column>
  <vaadin-grid-column header="456895"></vaadin-grid-column>
  <vaadin-grid-column header="Yes"></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bid-eval-committee-assignexperts-ui';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidEvalCommitteeAssignexpertsUi.is, BidEvalCommitteeAssignexpertsUi);
