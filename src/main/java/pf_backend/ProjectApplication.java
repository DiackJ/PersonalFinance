package pf_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import pf_backend.Config.EnvLoader;

@SpringBootApplication
public class ProjectApplication {

	static {
		EnvLoader.loadEnv();
	}

	public static void main(String[] args) {

		SpringApplication.run(ProjectApplication.class, args);
	}

}
