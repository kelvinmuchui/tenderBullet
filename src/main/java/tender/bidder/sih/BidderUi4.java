package tender.bidder.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bidder-ui4 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bidder-ui4")
@JsModule("./bidder-ui4.js")
public class BidderUi4 extends PolymerTemplate<BidderUi4.BidderUi4Model> {

    /**
     * Creates a new BidderUi4.
     */
    public BidderUi4() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidderUi4 and bidder-ui4
     */
    public interface BidderUi4Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
