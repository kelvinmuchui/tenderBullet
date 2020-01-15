package tender.bidder.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the bidder-ui2 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("bidder-ui2")
@JsModule("./bidder-ui2.js")
public class BidderUi2 extends PolymerTemplate<BidderUi2.BidderUi2Model> {

    /**
     * Creates a new BidderUi2.
     */
    public BidderUi2() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BidderUi2 and bidder-ui2
     */
    public interface BidderUi2Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
