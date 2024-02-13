package com.scheduler.AutomatedMailMessageScheduler.controller;

import com.scheduler.AutomatedMailMessageScheduler.service.TwilioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("message")
public class TwilioController {
    @Autowired
    private TwilioServiceImpl service;
    @GetMapping
    public String sendMessage(){
        return service.sendMessage("Generated Message", "+916398169466");
    }
}