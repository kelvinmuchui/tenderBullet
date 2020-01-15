import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';

class TenderCreator3 extends PolymerElement {

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
   <iron-icon></iron-icon>Create New Tender
  </vaadin-tab>
  <vaadin-tab>
   <iron-icon></iron-icon>Templates
  </vaadin-tab>
  <vaadin-tab>
   <iron-icon></iron-icon>Draft Tender
  </vaadin-tab>
  <vaadin-tab>
   <iron-icon></iron-icon>Repulish Tender
  </vaadin-tab>
 </vaadin-tabs>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Cover Content"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="Lable"></vaadin-grid-column>
  <vaadin-grid-column header="Type"></vaadin-grid-column>
  <vaadin-grid-column header="Description"></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
  <vaadin-grid-column header="Delete"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="2019_NIC_16725_pack1"></vaadin-grid-column>
  <vaadin-grid-column header=".pdf"></vaadin-grid-column>
  <vaadin-grid-column header="Scanned copy of Tender Fee and Emo"></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
  <vaadin-grid-column header="Delete"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="2019_NIC_16725_pack2"></vaadin-grid-column>
  <vaadin-grid-column header=".pdf"></vaadin-grid-column>
  <vaadin-grid-column header="Technical bid as per Tender Document"></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
  <vaadin-grid-column header="Delete"></vaadin-grid-column>
 </vaadin-grid>
 <div>
  <vaadin-vertical-layout>
   <label style="align-self: flex-start;"></label>
   <h3>Specific Document for cover:2019_NIC_16725_pack1</h3>
   <vaadin-horizontal-layout style="justify-content: space-between; align-self: stretch;width:50%">
    <label>Document Description</label>
    <vaadin-text-field></vaadin-text-field>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-between; align-self: stretch;width:50%">
    <label>Document Type</label>
    <vaadin-combo-box placeholder=".pdf"></vaadin-combo-box>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: space-around; width:30%; align-self: stretch;">
    <vaadin-button theme="primary">
     Cancel
    </vaadin-button>
    <vaadin-button theme="primary" style="align-self: flex-end;">
     Save
    </vaadin-button>
   </vaadin-horizontal-layout>
  </vaadin-vertical-layout>
 </div>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'tender-creator3';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(TenderCreator3.is, TenderCreator3);
