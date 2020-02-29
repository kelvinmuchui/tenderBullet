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
 * A Designer generated component for the login-screen template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Route("/")
@Tag("login-screen")
@JsModule("./login-screen.js")
public class LoginScreen extends PolymerTemplate<LoginScreen.LoginScreenModel> {

    @Id("vaadinButton")
    private Button vaadinButton;

    /**
     * Creates a new LoginScreen.
     */
    public LoginScreen() {
        vaadinButton.addClickListener(e -> UI.getCurrent().navigate(TenderCreator1.class));
    }

    /**
     * This model binds properties between LoginScreen and login-screen
     */
    public interface LoginScreenModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
