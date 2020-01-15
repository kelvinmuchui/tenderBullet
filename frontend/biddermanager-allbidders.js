import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';

class BiddermanagerAllbidders extends PolymerElement {

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
   Add Bidders
  </vaadin-tab>
  <vaadin-tab>
   View All 
  </vaadin-tab>
  <vaadin-tab>
   Pending for Review
  </vaadin-tab>
  <vaadin-tab>
   Suspended Bidders
  </vaadin-tab>
 </vaadin-tabs>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'biddermanager-allbidders';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BiddermanagerAllbidders.is, BiddermanagerAllbidders);
