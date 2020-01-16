import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';

class BidEvalCommitteeFinancialEval extends PolymerElement {

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
 <h3>Financial Evaluation</h3>
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
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Criterion"></vaadin-grid-column>
  <vaadin-grid-column header="Weightage"></vaadin-grid-column>
  <vaadin-grid-column header="Grade/Marks"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Evaluated Bid Price"></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Documents Submitted"></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Original Documents Applicable"></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Commercial Responsiveness "></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bid-eval-committee-financial-eval';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidEvalCommitteeFinancialEval.is, BidEvalCommitteeFinancialEval);
