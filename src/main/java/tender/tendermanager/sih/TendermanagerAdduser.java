package tender.tendermanager.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the tendermanager-adduser template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("tendermanager-adduser")
@JsModule("./tendermanager-adduser.js")
public class TendermanagerAdduser extends PolymerTemplate<TendermanagerAdduser.TendermanagerAdduserModel> {

    /**
     * Creates a new TendermanagerAdduser.
     */
    public TendermanagerAdduser() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between TendermanagerAdduser and tendermanager-adduser
     */
    public interface TendermanagerAdduserModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
