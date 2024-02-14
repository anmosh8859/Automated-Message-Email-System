package com.scheduler.AutomatedMailMessageScheduler.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailServiceImpl {
    @Autowired
    private JavaMailSender mailSender;

    public String sendMail(String to, String subject, String body){
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(to);
        mail.setSubject(subject);
        mail.setText(body);

        mailSender.send(mail);

        //kbfh ibck kdni oybt
        return "sent";
    }
}
