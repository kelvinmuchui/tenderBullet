import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';

class TenderCreator6 extends PolymerElement {

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
    Create New Tender 
  </vaadin-tab>
  <vaadin-tab>
    Templates 
  </vaadin-tab>
  <vaadin-tab>
    Draft Tenders 
  </vaadin-tab>
  <vaadin-tab>
    Repulish Tenders 
  </vaadin-tab>
 </vaadin-tabs>
 <h3>Republish Tender</h3>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Saved Tenders"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Tender ID"></vaadin-grid-column>
  <vaadin-grid-column header="Tender Name"></vaadin-grid-column>
  <vaadin-grid-column header="Created On"></vaadin-grid-column>
  <vaadin-grid-column header="Description"></vaadin-grid-column>
  <vaadin-grid-column header="Open for Editing"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="8126412"></vaadin-grid-column>
  <vaadin-grid-column header="2019_NIC_16725_pack1"></vaadin-grid-column>
  <vaadin-grid-column header="18/01/2019"></vaadin-grid-column>
  <vaadin-grid-column header="Proving Services of inspection vehicle for the Assistant Engineer"></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="4263902"></vaadin-grid-column>
  <vaadin-grid-column header="2019_NIC_16725_pack2"></vaadin-grid-column>
  <vaadin-grid-column header="10/01/2019"></vaadin-grid-column>
  <vaadin-grid-column header="Construction of Science and Technology building G5  "></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'tender-creator6';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(TenderCreator6.is, TenderCreator6);
