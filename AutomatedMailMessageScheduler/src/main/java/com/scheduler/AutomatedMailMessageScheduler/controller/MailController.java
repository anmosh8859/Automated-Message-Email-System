package com.scheduler.AutomatedMailMessageScheduler.controller;

import com.scheduler.AutomatedMailMessageScheduler.service.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("mail")
public class MailController {

    @Autowired
    private EmailServiceImpl mail;

    @GetMapping()
    public String sendMessage(){
        return mail.sendMail("anandmohansharma786@gmail.com","I am Anand sending mail yuo automatically","Hey! Prakash It's Anand");
    }

}
