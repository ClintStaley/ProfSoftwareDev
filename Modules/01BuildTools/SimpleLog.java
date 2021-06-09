package com.softwareinventions.logtest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class SimpleLog {
   public static void main(String[] args) {

      Log log = LogFactory.getLog(SimpleLog.class);
      
      log.error("Hello, world!");
   }
}