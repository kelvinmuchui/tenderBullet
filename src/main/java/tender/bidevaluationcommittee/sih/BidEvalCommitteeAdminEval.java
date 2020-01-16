package tender.bidevaluationcommittee.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bid-eval-committee-admin-eval template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bid-eval-committee-admin-eval")
@JsModule("./bid-eval-committee-admin-eval.js")
public class BidEvalCommitteeAdminEval extends PolymerTemplate<BidEvalCommitteeAdminEval.BidEvalCommitteeAdminEvalModel> {

    /**
     * Creates a new BidEvalCommitteeAdminEval.
     */
    public BidEvalCommitteeAdminEval() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidEvalCommitteeAdminEval and bid-eval-committee-admin-eval
     */
    public interface BidEvalCommitteeAdminEvalModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
