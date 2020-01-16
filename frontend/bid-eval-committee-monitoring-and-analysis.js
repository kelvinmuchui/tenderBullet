import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class BidEvalCommitteeMonitoringAndAnalysis extends PolymerElement {

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
   View all bids
  </vaadin-tab>
  <vaadin-tab>
   Assign Experts
  </vaadin-tab>
  <vaadin-tab>
   Track the status of bids
  </vaadin-tab>
 </vaadin-tabs>
 <h3>Monitoring and Analysis</h3>
 <vaadin-vertical-layout style="width:35%; align-items: stretch; height:20%; justify-content: space-around;">
  <vaadin-button theme="primary">
   Monitor scored responses from experts
  </vaadin-button>
  <vaadin-button theme="primary">
   See result summary
  </vaadin-button>
  <vaadin-button theme="primary">
   Evaluation Report
  </vaadin-button>
 </vaadin-vertical-layout>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'bid-eval-committee-monitoring-and-analysis';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(BidEvalCommitteeMonitoringAndAnalysis.is, BidEvalCommitteeMonitoringAndAnalysis);
