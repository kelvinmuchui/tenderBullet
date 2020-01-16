package tender.bidevaluationcommittee.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bid-eval-committee-tech-eval template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bid-eval-committee-tech-eval")
@JsModule("./bid-eval-committee-tech-eval.js")
public class BidEvalCommitteeTechEval extends PolymerTemplate<BidEvalCommitteeTechEval.BidEvalCommitteeTechEvalModel> {

    /**
     * Creates a new BidEvalCommitteeTechEval.
     */
    public BidEvalCommitteeTechEval() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidEvalCommitteeTechEval and bid-eval-committee-tech-eval
     */
    public interface BidEvalCommitteeTechEvalModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
