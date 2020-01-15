package tender.vigilanceofficer-or-auditor.sih;

import com.vaadin.flow.templatemodel.TemplateModel;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * A Designer generated component for the cvo-or-auditor-ui template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("cvo-or-auditor-ui")
@JsModule("./cvo-or-auditor-ui.js")
public class CvoOrAuditorUi extends PolymerTemplate<CvoOrAuditorUi.CvoOrAuditorUiModel> {

    /**
     * Creates a new CvoOrAuditorUi.
     */
    public CvoOrAuditorUi() {
        // You can initialise any data required for the connected UI components here.
    }

    /**
     * This model binds properties between CvoOrAuditorUi and cvo-or-auditor-ui
     */
    public interface CvoOrAuditorUiModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
