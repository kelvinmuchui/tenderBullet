package tender.tendermanager.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the tendermanager-selfregistration template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("tendermanager-selfregistration")
@JsModule("./tendermanager-selfregistration.js")
public class TendermanagerSelfregistration extends PolymerTemplate<TendermanagerSelfregistration.TendermanagerSelfregistrationModel> {

    /**
     * Creates a new TendermanagerSelfregistration.
     */
    public TendermanagerSelfregistration() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between TendermanagerSelfregistration and tendermanager-selfregistration
     */
    public interface TendermanagerSelfregistrationModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
