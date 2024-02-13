package com.scheduler.AutomatedMailMessageScheduler.service;

import com.scheduler.AutomatedMailMessageScheduler.configuratin.TwilioConfig;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TwilioServiceImpl implements TwilioService{
    @Autowired
    private TwilioConfig twilioConfig;

    @Override
    public String sendMessage(String message, String number) {

        PhoneNumber from = new PhoneNumber(twilioConfig.getTrialNumber());
        PhoneNumber to = new PhoneNumber(number);
        Message messageMachine = Message.creator(to,from,message).create();
        return messageMachine.getSid();
    }
}