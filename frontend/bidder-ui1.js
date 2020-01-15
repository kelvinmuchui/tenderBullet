import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@polymer/iron-icon/iron-icon.js';

class BidderUi1 extends PolymerElement {

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
 <h2>Tenders</h2>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Tender Title"></vaadin-grid-column>
  <vaadin-grid-column header="Bid Opening Date"></vaadin-grid-column>
  <vaadin-grid-column header="Technical and Financial Details"></vaadin-grid-column>
  <vaadin-grid-column header="Bid Closing Date"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Notice inviting tender for supply of FRP moulded grating"></vaadin-grid-column>
  <vaadin-grid-column header="21-Jan-2020 3:00 PM"></vaadin-grid-column>
  <vaadin-grid-column header="View"></vaadin-grid-column>
  <vaadin-grid-column header="15-Sept-2020"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="M/p Park and Tot Lot at Sector 29, Rohini pocket "></vaadin-grid-column>
  <vaadin-grid-column header="21-Jan-2020 03:00 PM"></vaadin-grid-column>
  <vaadin-grid-column header="View"></vaadin-grid-column>
  <vaadin-grid-column header="15-Sept-2020"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Hiring of light commercial vehicles"></vaadin-grid-column>
  <vaadin-grid-column header="21-Jan-2020 03:00 PM"></vaadin-grid-column>
  <vaadin-grid-column header="View"></vaadin-grid-column>
  <vaadin-grid-column header="15-Sept-2020"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="CWEK-31/2019-20"></vaadin-grid-column>
  <vaadin-grid-column header="21-Jan-2020 03:00 PM"></vaadin-grid-column>
  <vaadin-grid-column header="View"></vaadin-grid-column>
  <vaadin-grid-column header="20-Oct-2020"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="M/O Park Mandirwala, Block H3, Sector -18 Rohini"></vaadin-grid-column>
  <vaadin-grid-column header="21-Jan-2020 03:00 PM"></vaadin-grid-column>
  <vaadin-grid-column header="View"></vaadin-grid-column>
  <vaadin-grid-column header="12-Feb-2020"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Hiring of light commercial vehicles"></vaadin-grid-column>
  <vaadin-grid-column header="21-Jan-2020 03:00 PM"></vaadin-grid-column>
  <vaadin-grid-column header="View"></vaadin-grid-column>
  <vaadin-grid-column header="12-Sept-2020"></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bidder-ui1';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidderUi1.is, BidderUi1);
