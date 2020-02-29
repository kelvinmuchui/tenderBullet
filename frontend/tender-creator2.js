import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class TenderCreator2 extends PolymerElement {

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
   <iron-icon></iron-icon>Create Tender 
  </vaadin-tab>
  <vaadin-tab>
   <iron-icon></iron-icon>Templates 
  </vaadin-tab>
  <vaadin-tab>
   <iron-icon></iron-icon>Draft Tender 
  </vaadin-tab>
  <vaadin-tab>
   <iron-icon></iron-icon>Republish Tender 
  </vaadin-tab>
 </vaadin-tabs>
 <vaadin-text-field placeholder="Search">
  <iron-icon icon="lumo:search" slot="prefix"></iron-icon>
 </vaadin-text-field>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Cover Name"></vaadin-grid-column>
  <vaadin-grid-column header="Cover Type"></vaadin-grid-column>
  <vaadin-grid-column header="Cover Document"></vaadin-grid-column>
  <vaadin-grid-column header="Add Document"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="2019_NIC_16725_pack1"></vaadin-grid-column>
  <vaadin-grid-column header="Fee/Prequal/Technical"></vaadin-grid-column>
  <vaadin-grid-column header="0"></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="2019_NIC_16725_pack1"></vaadin-grid-column>
  <vaadin-grid-column header="Finance"></vaadin-grid-column>
  <vaadin-grid-column header="0"></vaadin-grid-column>
  <vaadin-grid-column></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-button theme="primary" id="vaadinButton">
   Next 
 </vaadin-button>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'tender-creator2';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(TenderCreator2.is, TenderCreator2);
