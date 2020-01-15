import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';

class BidderUi3 extends PolymerElement {

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
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Bidder Notifications"></vaadin-grid-column>
  <vaadin-grid-column header="Time"></vaadin-grid-column>
  <vaadin-grid-column header="Date"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Your maximum bi din the amount of $260.00,has been posted successfully. You are now the highest bidder on this item, with a bid of $260.00."></vaadin-grid-column>
  <vaadin-grid-column header="1:00 PM"></vaadin-grid-column>
  <vaadin-grid-column header="12-02-2020"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Please use these approved bidders for projects in the Bay Area."></vaadin-grid-column>
  <vaadin-grid-column header="10:00 AM"></vaadin-grid-column>
  <vaadin-grid-column header="10-02-2020"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="The Technical Evaluation Committee evaluated all the proposals in strict accordance with the evaluation criteria set forth in the RFP and your proposal is selected for award."></vaadin-grid-column>
  <vaadin-grid-column header="3:30 PM"></vaadin-grid-column>
  <vaadin-grid-column header="03-02-2020"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Use Bid ID 16729444AB to submit the projects"></vaadin-grid-column>
  <vaadin-grid-column header="1:00 PM"></vaadin-grid-column>
  <vaadin-grid-column header="20-01-2020"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="You are invited tp provide clarification or justification or any information which can be helpful in explaining why the tender price is not unreasonably low and how you are able to fulfil the contract at such a low...."></vaadin-grid-column>
  <vaadin-grid-column header="5:30 PM"></vaadin-grid-column>
  <vaadin-grid-column header="18-01-2020"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="San Jose Office Bidder list - San Jose Office approved list of bidders"></vaadin-grid-column>
  <vaadin-grid-column header="7:00 PM"></vaadin-grid-column>
  <vaadin-grid-column header="09-01-2020"></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bidder-ui3';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidderUi3.is, BidderUi3);
