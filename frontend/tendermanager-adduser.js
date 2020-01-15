import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class TendermanagerAdduser extends PolymerElement {

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
 <h2>Add User</h2>
 <vaadin-vertical-layout style="height:50%; width:40%;">
  <vaadin-horizontal-layout style="width:90%; justify-content: space-between;">
   Username*
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:90%; justify-content: space-between;">
   Password*
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:90%; justify-content: space-between;">
   First Name
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:90%; justify-content: space-between;">
   Last Name
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:90%; justify-content: space-between;">
   Email contract
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:90%; justify-content: space-between;">
   Contact Primary
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:90%; justify-content: space-between;">
   Contact Secondary
   <vaadin-text-field></vaadin-text-field>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:90%; justify-content: space-between;">
   User Role
   <vaadin-combo-box></vaadin-combo-box>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:90%; justify-content: space-between;">
   User Status
   <vaadin-combo-box></vaadin-combo-box>
  </vaadin-horizontal-layout>
  <vaadin-horizontal-layout style="width:100%; justify-content: flex-start; align-items: flex-start;">
   <vaadin-button theme="primary" style="align-self: center;">
    Add User
   </vaadin-button>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'tendermanager-adduser';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(TendermanagerAdduser.is, TendermanagerAdduser);
