package tender.creator.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the tender-creator5 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("tender-creator5")
@JsModule("./tender-creator5.js")
public class TenderCreator5 extends PolymerTemplate<TenderCreator5.TenderCreator5Model> {

    /**
     * Creates a new TenderCreator5.
     */
    public TenderCreator5() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between TenderCreator5 and tender-creator5
     */
    public interface TenderCreator5Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
