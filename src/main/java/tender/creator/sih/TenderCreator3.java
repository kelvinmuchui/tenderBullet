package tender.creator.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the tender-creator3 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("tender-creator3")
@JsModule("./tender-creator3.js")
public class TenderCreator3 extends PolymerTemplate<TenderCreator3.TenderCreator3Model> {

    /**
     * Creates a new TenderCreator3.
     */
    public TenderCreator3() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between TenderCreator3 and tender-creator3
     */
    public interface TenderCreator3Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
