package com.scheduler.AutomatedMailMessageScheduler;

import com.scheduler.AutomatedMailMessageScheduler.configuratin.TwilioConfig;
import com.scheduler.AutomatedMailMessageScheduler.service.TwilioServiceImpl;
import com.twilio.Twilio;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableMongoRepositories("com.scheduler.AutomatedMailMessageScheduler.repository")
public class AutomatedMailMessageSchedulerApplication {

	@Autowired
	private TwilioConfig twilioConfig;
	@PostConstruct
	public void initTwilio(){
		Twilio.init(twilioConfig.getAccountSid(),twilioConfig.getAuthToken());
	}

	public static void main(String[] args) {
		SpringApplication.run(AutomatedMailMessageSchedulerApplication.class, args);
	}

}