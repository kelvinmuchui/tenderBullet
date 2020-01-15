package tender.bidevaluationcommittee.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bid-eval-committee-monitoring template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bid-eval-committee-monitoring")
@JsModule("./bid-eval-committee-monitoring.js")
public class BidEvalCommitteeMonitoring extends PolymerTemplate<BidEvalCommitteeMonitoring.BidEvalCommitteeMonitoringModel> {

    /**
     * Creates a new BidEvalCommitteeMonitoring.
     */
    public BidEvalCommitteeMonitoring() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidEvalCommitteeMonitoring and bid-eval-committee-monitoring
     */
    public interface BidEvalCommitteeMonitoringModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
