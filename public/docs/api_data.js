define({ "api": [
  {
    "type": "post",
    "url": "/sms",
    "title": "Send an SMS message",
    "group": "SMS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message to send</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"phone\": \"0601010101\",\n    \"message\": \"Hi !\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"message sent\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "SMS",
    "name": "PostSms"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "Retrieve status information from the SMS gateway",
    "group": "Status",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"timestamp\": 1522613750000,\n    \"is_airplane_mode\": false,\n    \"telephony\": {\n        \"network_operator_name\": \"Some operator name\",\n        \"sim_state\": \"ready\",\n        \"is_network_roaming\": false\n    },\n    \"battery\": {\n        \"status\": \"charging\",\n        \"level\": 99\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "GetStatus"
  }
] });
