import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';

class BidEvalCommitteeChairmanUi extends PolymerElement {

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
  <vaadin-grid-column header="Bid ID"></vaadin-grid-column>
  <vaadin-grid-column header="Bid Description"></vaadin-grid-column>
  <vaadin-grid-column header="Closing Dates"></vaadin-grid-column>
  <vaadin-grid-column header="Bid Amount"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="165834"></vaadin-grid-column>
  <vaadin-grid-column header="Comprehensive Mtc. of gaseous type full vacuum chlorination system"></vaadin-grid-column>
  <vaadin-grid-column header="20-3-20"></vaadin-grid-column>
  <vaadin-grid-column header="50 Cr."></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="195688"></vaadin-grid-column>
  <vaadin-grid-column header="Oper. and mtc. of sewerage system storm water drainage system in eastern side of railway line under municipal corporatin, Sonipat"></vaadin-grid-column>
  <vaadin-grid-column header="29-5-20"></vaadin-grid-column>
  <vaadin-grid-column header="20 Cr."></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="498798"></vaadin-grid-column>
  <vaadin-grid-column header="Raising and covering of drain at Shiva Harijan Colony, Ballabgarh, in Ward No. 36"></vaadin-grid-column>
  <vaadin-grid-column header="16-6-20"></vaadin-grid-column>
  <vaadin-grid-column header="10 Cr."></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bid-eval-committee-chairman-ui';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidEvalCommitteeChairmanUi.is, BidEvalCommitteeChairmanUi);
