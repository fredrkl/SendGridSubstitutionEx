    var sendGridModule = require('sendgrid');
    var SendGrid = require('sendgrid').SendGrid;
    var sendgrid = new SendGrid('azureUsername', 'AzurePassword');
    var email = new sendGridModule.Email();

    email.subject = "The subject";
    email.from = 'example@example.com';
    email.text = 'example';
    email.html = 'example';
    email.addTo(emailAddress);
    
    email.smtpapi.filters = {
        'templates': {
            'settings': {
                'enable': 1,
                'template_id' : 'templateGUID',
            }
        }
    };
    email.smtpapi.to = ["receiver@receiver.com"];
    email.smtpapi.sub = { "-toBeSubstituted-" : ['withThis'] }
    
    sendgrid.send(email, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });
