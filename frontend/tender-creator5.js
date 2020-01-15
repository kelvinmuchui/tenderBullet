import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';

class TenderCreator5 extends PolymerElement {

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
   Repulish Tender
  </vaadin-tab>
 </vaadin-tabs>
 <h3>Draft Tenders</h3>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Saved Tenders"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="S.No."></vaadin-grid-column>
  <vaadin-grid-column header="Template Name"></vaadin-grid-column>
  <vaadin-grid-column header="Created On"></vaadin-grid-column>
  <vaadin-grid-column header="Description"></vaadin-grid-column>
  <vaadin-grid-column header="Open for Editing"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="1"></vaadin-grid-column>
  <vaadin-grid-column header="2019_NIC_16725_pack1"></vaadin-grid-column>
  <vaadin-grid-column header="18/01/2019"></vaadin-grid-column>
  <vaadin-grid-column header="providing services of inspection vehicle for the Assistant Engineer,CPWD"></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="2"></vaadin-grid-column>
  <vaadin-grid-column header="2019_NIC_16725_pack1"></vaadin-grid-column>
  <vaadin-grid-column header="10/01/2019"></vaadin-grid-column>
  <vaadin-grid-column header="Construction of science and technology building G Plus 5"></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'tender-creator5';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(TenderCreator5.is, TenderCreator5);
