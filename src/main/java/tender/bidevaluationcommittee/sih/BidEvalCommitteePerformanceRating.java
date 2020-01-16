package tender.bidevaluationcommittee.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bid-eval-committee-performance-rating template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bid-eval-committee-performance-rating")
@JsModule("./bid-eval-committee-performance-rating.js")
public class BidEvalCommitteePerformanceRating extends PolymerTemplate<BidEvalCommitteePerformanceRating.BidEvalCommitteePerformanceRatingModel> {

    /**
     * Creates a new BidEvalCommitteePerformanceRating.
     */
    public BidEvalCommitteePerformanceRating() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidEvalCommitteePerformanceRating and bid-eval-committee-performance-rating
     */
    public interface BidEvalCommitteePerformanceRatingModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
