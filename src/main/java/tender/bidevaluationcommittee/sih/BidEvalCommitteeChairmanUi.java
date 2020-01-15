package tender.bidevaluationcommittee.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bid-eval-committee-chairman-ui template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bid-eval-committee-chairman-ui")
@JsModule("./bid-eval-committee-chairman-ui.js")
public class BidEvalCommitteeChairmanUi extends PolymerTemplate<BidEvalCommitteeChairmanUi.BidEvalCommitteeChairmanUiModel> {

    /**
     * Creates a new BidEvalCommitteeChairmanUi.
     */
    public BidEvalCommitteeChairmanUi() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidEvalCommitteeChairmanUi and bid-eval-committee-chairman-ui
     */
    public interface BidEvalCommitteeChairmanUiModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
