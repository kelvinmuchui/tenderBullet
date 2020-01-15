package tender.biddermanager.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the biddermanager-allbidders template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("biddermanager-allbidders")
@JsModule("./biddermanager-allbidders.js")
public class BiddermanagerAllbidders extends PolymerTemplate<BiddermanagerAllbidders.BiddermanagerAllbiddersModel> {

    /**
     * Creates a new BiddermanagerAllbidders.
     */
    public BiddermanagerAllbidders() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between BiddermanagerAllbidders and biddermanager-allbidders
     */
    public interface BiddermanagerAllbiddersModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
