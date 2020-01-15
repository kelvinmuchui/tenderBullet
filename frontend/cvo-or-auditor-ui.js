import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-charts/src/vaadin-chart.js';

class CvoOrAuditorUi extends PolymerElement {

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
   Profile
  </vaadin-tab>
  <vaadin-tab>
   List of Tenders
  </vaadin-tab>
  <vaadin-tab>
   Submitted Bids
  </vaadin-tab>
  <vaadin-tab>
   Profile of all bidders
  </vaadin-tab>
  <vaadin-tab>
   Registered Tenders
  </vaadin-tab>
  <vaadin-tab>
   Notifications 
  </vaadin-tab>
 </vaadin-tabs>
 <h2>Summary of the Data</h2>
 <vaadin-horizontal-layout style="justify-content: space-between; width:75%">
  <vaadin-button>
   120 New Bids
  </vaadin-button>
  <vaadin-button>
   25 Complaints
  </vaadin-button>
  <vaadin-button>
   4 New Tenders
  </vaadin-button>
  <vaadin-button>
   175 Total Tenders
  </vaadin-button>
 </vaadin-horizontal-layout>
 <vaadin-chart type="column" title="Monthly Average Rainfall" subtitle="Source: WorldClimate.com" categories="[&quot;Jan&quot;, &quot;Feb&quot;, &quot;Mar&quot;, &quot;Apr&quot;, &quot;May&quot;, &quot;Jun&quot;,
  &quot;Jul&quot;, &quot;Aug&quot;, &quot;Sep&quot;, &quot;Oct&quot;, &quot;Nov&quot;, &quot;Dec&quot;]" additional-options="{ &quot;tooltip&quot;: {  &quot;shared&quot;: true  }  }">
  <vaadin-chart-series title="Tokyo" values="[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]"></vaadin-chart-series>
  <vaadin-chart-series title="New York" values="[83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]"></vaadin-chart-series>
  <vaadin-chart-series title="London" values="[48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]"></vaadin-chart-series>
  <vaadin-chart-series title="Berlin" values="[42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]"></vaadin-chart-series>
 </vaadin-chart>
</vaadin-app-layout>
`;
    }

    static get is() {
        return 'cvo-or-auditor-ui';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(CvoOrAuditorUi.is, CvoOrAuditorUi);
