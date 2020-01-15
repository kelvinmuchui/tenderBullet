package tender.bidder.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bidder-ui1 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bidder-ui1")
@JsModule("./bidder-ui1.js")
public class BidderUi1 extends PolymerTemplate<BidderUi1.BidderUi1Model> {

    /**
     * Creates a new BidderUi1.
     */
    public BidderUi1() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidderUi1 and bidder-ui1
     */
    public interface BidderUi1Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
