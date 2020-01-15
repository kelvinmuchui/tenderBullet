package tender.tendermanager.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the tendermanager-gailusers template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("tendermanager-gailusers")
@JsModule("./tendermanager-gailusers.js")
public class TendermanagerGailusers extends PolymerTemplate<TendermanagerGailusers.TendermanagerGailusersModel> {

    /**
     * Creates a new TendermanagerGailusers.
     */
    public TendermanagerGailusers() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between TendermanagerGailusers and tendermanager-gailusers
     */
    public interface TendermanagerGailusersModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
