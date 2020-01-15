package tender.creator.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the tender-creator4 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("tender-creator4")
@JsModule("./tender-creator4.js")
public class TenderCreator4 extends PolymerTemplate<TenderCreator4.TenderCreator4Model> {

    /**
     * Creates a new TenderCreator4.
     */
    public TenderCreator4() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between TenderCreator4 and tender-creator4
     */
    public interface TenderCreator4Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
