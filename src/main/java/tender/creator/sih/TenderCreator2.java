package tender.creator.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the tender-creator2 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("tender-creator2")
@JsModule("./tender-creator2.js")
public class TenderCreator2 extends PolymerTemplate<TenderCreator2.TenderCreator2Model> {

    /**
     * Creates a new TenderCreator2.
     */
    public TenderCreator2() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between TenderCreator2 and tender-creator2
     */
    public interface TenderCreator2Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
