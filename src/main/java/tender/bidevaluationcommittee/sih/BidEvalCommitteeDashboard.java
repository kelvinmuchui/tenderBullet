package tender.bidevaluationcommittee.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bid-eval-committee-dashboard template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bid-eval-committee-dashboard")
@JsModule("./bid-eval-committee-dashboard.js")
public class BidEvalCommitteeDashboard extends PolymerTemplate<BidEvalCommitteeDashboard.BidEvalCommitteeDashboardModel> {

    /**
     * Creates a new BidEvalCommitteeDashboard.
     */
    public BidEvalCommitteeDashboard() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidEvalCommitteeDashboard and bid-eval-committee-dashboard
     */
    public interface BidEvalCommitteeDashboardModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
