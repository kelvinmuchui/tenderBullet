package tender.bidevaluationcommittee.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bid-eval-committee-result-summary template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bid-eval-committee-result-summary")
@JsModule("./bid-eval-committee-result-summary.js")
public class BidEvalCommitteeResultSummary extends PolymerTemplate<BidEvalCommitteeResultSummary.BidEvalCommitteeResultSummaryModel> {

    /**
     * Creates a new BidEvalCommitteeResultSummary.
     */
    public BidEvalCommitteeResultSummary() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidEvalCommitteeResultSummary and bid-eval-committee-result-summary
     */
    public interface BidEvalCommitteeResultSummaryModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
