package com.preverjanje.hello_java;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;

@RestController
public class HelloController {
    
    @GetMapping(value = {"/hello", "/hello/{name}"})
    public ResponseEntity<Object> returnName(@PathVariable(required = false) String name) { // parameter name ni obvezen
        String responseMessage = (name == null ? "ni imena" : "Hello " + name); 
        HashMap<String, String> jsonResponse = new HashMap<String, String>(); // sestavimo json
        jsonResponse.put("msg", responseMessage);
        return new ResponseEntity<Object>(jsonResponse, HttpStatus.OK);
    }
}
