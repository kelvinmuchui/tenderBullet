package tender.creator.sih;

import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the tender-creator1 template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Route("tenderCreator1")
@Tag("tender-creator1")
@JsModule("./tender-creator1.js")
public class TenderCreator1 extends PolymerTemplate<TenderCreator1.TenderCreator1Model> {

    @Id("vaadinButton")
    private Button vaadinButton;

    /**
     * Creates a new TenderCreator1.
     */
    public TenderCreator1() {
        vaadinButton.addClickListener(e -> UI.getCurrent().navigate(TenderCreator2.class));
    }

    /**
     * This model binds properties between TenderCreator1 and tender-creator1
     */
    public interface TenderCreator1Model extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
