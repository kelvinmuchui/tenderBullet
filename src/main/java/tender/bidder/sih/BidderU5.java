package tender.bidder.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bidder-u5 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bidder-u5")
@JsModule("./bidder-u5.js")
public class BidderU5 extends PolymerTemplate<BidderU5.BidderU5Model> {

    /**
     * Creates a new BidderU5.
     */
    public BidderU5() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidderU5 and bidder-u5
     */
    public interface BidderU5Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
