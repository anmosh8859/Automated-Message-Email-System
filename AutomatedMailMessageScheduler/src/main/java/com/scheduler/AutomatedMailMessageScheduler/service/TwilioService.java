package com.scheduler.AutomatedMailMessageScheduler.service;

public interface TwilioService {
    public String sendMessage(String message, String number);
}
