package tender.bidder.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bidder-ui3 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bidder-ui3")
@JsModule("./bidder-ui3.js")
public class BidderUi3 extends PolymerTemplate<BidderUi3.BidderUi3Model> {

    /**
     * Creates a new BidderUi3.
     */
    public BidderUi3() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidderUi3 and bidder-ui3
     */
    public interface BidderUi3Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
