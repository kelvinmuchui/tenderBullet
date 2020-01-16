import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class BidEvalCommitteePerformanceRating extends PolymerElement {

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
 <h3>Performance Rating Data Sheet </h3>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="S.No."></vaadin-grid-column>
  <vaadin-grid-column header="Performance Parameter"></vaadin-grid-column>
  <vaadin-grid-column header="Delivery Completion Performance"></vaadin-grid-column>
  <vaadin-grid-column header="Quality Performance "></vaadin-grid-column>
  <vaadin-grid-column header="Reliability Performance"></vaadin-grid-column>
  <vaadin-grid-column header="Total"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="1"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="2"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="3"></vaadin-grid-column>
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
        return 'bid-eval-committee-performance-rating';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidEvalCommitteePerformanceRating.is, BidEvalCommitteePerformanceRating);
