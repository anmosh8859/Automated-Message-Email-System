package com.scheduler.AutomatedMailMessageScheduler.configuration;

import com.scheduler.AutomatedMailMessageScheduler.entity.User;
import com.scheduler.AutomatedMailMessageScheduler.service.EmailServiceImpl;
import com.scheduler.AutomatedMailMessageScheduler.service.TwilioServiceImpl;
import com.scheduler.AutomatedMailMessageScheduler.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.List;

@Configuration
public class MessageEmailConfiguration {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private TwilioServiceImpl messageService;

    @Autowired
    private EmailServiceImpl emailService;

    @Scheduled(cron = "0 0 0 * * ?")
    public void sendMailToAll(){
        System.out.println("I am triggered at scheduled time!");
        List<User> users = userService.getAllUsers();
        users.stream().forEach(user->{
            emailService.sendMail(user.getEmail(),"Test","This is a generated scheduled email!");
            messageService.sendMessage("Happy Birthday",user.getPhone());
        });
    }
}
