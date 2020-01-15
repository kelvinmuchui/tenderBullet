import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-grid/src/vaadin-grid.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';

class TendermanagerGailusers extends PolymerElement {

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
   User Roles
  </vaadin-tab>
 </vaadin-tabs>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="GAIL Users"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="#ID"></vaadin-grid-column>
  <vaadin-grid-column header="First Name"></vaadin-grid-column>
  <vaadin-grid-column header="Last Name"></vaadin-grid-column>
  <vaadin-grid-column header="User ID/Employee ID"></vaadin-grid-column>
  <vaadin-grid-column header="Active"></vaadin-grid-column>
  <vaadin-grid-column header="Designation"></vaadin-grid-column>
  <vaadin-grid-column header="Group ID"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="122"></vaadin-grid-column>
  <vaadin-grid-column header="Sam"></vaadin-grid-column>
  <vaadin-grid-column header="Dario"></vaadin-grid-column>
  <vaadin-grid-column header="56347"></vaadin-grid-column>
  <vaadin-grid-column header="Active"></vaadin-grid-column>
  <vaadin-grid-column header="Administrator"></vaadin-grid-column>
  <vaadin-grid-column header="UGA1"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="123"></vaadin-grid-column>
  <vaadin-grid-column header="Mario"></vaadin-grid-column>
  <vaadin-grid-column header="Gomez"></vaadin-grid-column>
  <vaadin-grid-column header="46853"></vaadin-grid-column>
  <vaadin-grid-column header="Active"></vaadin-grid-column>
  <vaadin-grid-column header="Tender Manager"></vaadin-grid-column>
  <vaadin-grid-column header="UG21"></vaadin-grid-column>
 </vaadin-grid>
 <vaadin-grid height-by-rows>
  <vaadin-grid-column header="158"></vaadin-grid-column>
  <vaadin-grid-column header="Marcus"></vaadin-grid-column>
  <vaadin-grid-column header="Rashford"></vaadin-grid-column>
  <vaadin-grid-column header="58796"></vaadin-grid-column>
  <vaadin-grid-column header="Active"></vaadin-grid-column>
  <vaadin-grid-column header="CVO"></vaadin-grid-column>
  <vaadin-grid-column header="UG44"></vaadin-grid-column>
 </vaadin-grid>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'tendermanager-gailusers';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(TendermanagerGailusers.is, TendermanagerGailusers);
