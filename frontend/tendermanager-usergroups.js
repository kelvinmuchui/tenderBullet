import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';

class TendermanagerUsergroups extends PolymerElement {

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
   GAIL Users
  </vaadin-tab>
  <vaadin-tab>
   User Groups
  </vaadin-tab>
 </vaadin-tabs>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="GAIL User Groups"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="#ID"></vaadin-grid-column>
  <vaadin-grid-column header="Name"></vaadin-grid-column>
  <vaadin-grid-column header="Privileges"></vaadin-grid-column>
  <vaadin-grid-column header="Descripton"></vaadin-grid-column>
  <vaadin-grid-column header="Active"></vaadin-grid-column>
  <vaadin-grid-column header="Actions"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="UG01"></vaadin-grid-column>
  <vaadin-grid-column header="Admin"></vaadin-grid-column>
  <vaadin-grid-column header="ALL"></vaadin-grid-column>
  <vaadin-grid-column header="Root Admin"></vaadin-grid-column>
  <vaadin-grid-column header="Yes">
   <vaadin-grid-column></vaadin-grid-column>
  </vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="UG21"></vaadin-grid-column>
  <vaadin-grid-column header="CVO"></vaadin-grid-column>
  <vaadin-grid-column header="CVO"></vaadin-grid-column>
  <vaadin-grid-column header="Investigation Head"></vaadin-grid-column>
  <vaadin-grid-column header="Yes"></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="UG33"></vaadin-grid-column>
  <vaadin-grid-column header="Tender Manager"></vaadin-grid-column>
  <vaadin-grid-column header="Tender Mannagement"></vaadin-grid-column>
  <vaadin-grid-column header="Publish and Review Tenders"></vaadin-grid-column>
  <vaadin-grid-column header="Yes"></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="UG33"></vaadin-grid-column>
  <vaadin-grid-column header="BEC Head"></vaadin-grid-column>
  <vaadin-grid-column header="Evaluation Mananger"></vaadin-grid-column>
  <vaadin-grid-column header="Assigned Bids for Evaluation to the Members"></vaadin-grid-column>
  <vaadin-grid-column header="Yes"></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="UG34"></vaadin-grid-column>
  <vaadin-grid-column header="BEC Technical Members"></vaadin-grid-column>
  <vaadin-grid-column header="Technical Evaluators"></vaadin-grid-column>
  <vaadin-grid-column header="Evaluate Assigned Technical Bids"></vaadin-grid-column>
  <vaadin-grid-column header="Yes"></vaadin-grid-column>
  <vaadin-grid-column header="Edit"></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'tendermanager-usergroups';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(TendermanagerUsergroups.is, TendermanagerUsergroups);
