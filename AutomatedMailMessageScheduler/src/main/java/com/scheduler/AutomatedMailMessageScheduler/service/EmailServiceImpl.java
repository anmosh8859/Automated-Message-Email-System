package com.scheduler.AutomatedMailMessageScheduler.service;

import com.scheduler.AutomatedMailMessageScheduler.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailServiceImpl {
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private UserServiceImpl service;

    @Autowired
    private TwilioServiceImpl messageSender;

    public String sendMail(String to, String subject, String body){
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(to);
        mail.setSubject(subject);
        mail.setText(body);

        mailSender.send(mail);

        //kbfh ibck kdni oybt
        return "sent";
    }

    @Scheduled(cron = "0 0 0 * * ?")
    public void sendMailToAll(){
        List<User> users = service.getAllUsers();
        users.stream().forEach(user->{
            sendMail(user.getEmail(),"Test","This is a generated scheduled email!");
            messageSender.sendMessage("This is Automatically generated message!",user.getPhone());
        });
    }
}
