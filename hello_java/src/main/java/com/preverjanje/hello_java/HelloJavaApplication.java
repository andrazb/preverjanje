package com.preverjanje.hello_java;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloJavaApplication {

	public static void main(String[] args) {
		SpringApplication application = new SpringApplication(HelloJavaApplication.class);
        application.setAdditionalProfiles("ssl");
        application.run(args);
	}

}
