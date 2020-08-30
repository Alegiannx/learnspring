package alex.learnspring.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {
    @RequestMapping("/")
    public String getIndex() {
        return "index"; // how do I return a dynamic build of index.html
    }
}