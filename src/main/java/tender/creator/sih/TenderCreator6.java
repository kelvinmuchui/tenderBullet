package tender.creator.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the tender-creator6 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("tender-creator6")
@JsModule("./tender-creator6.js")
public class TenderCreator6 extends PolymerTemplate<TenderCreator6.TenderCreator6Model> {

    /**
     * Creates a new TenderCreator6.
     */
    public TenderCreator6() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between TenderCreator6 and tender-creator6
     */
    public interface TenderCreator6Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
