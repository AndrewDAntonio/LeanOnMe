class MessageSender < ApplicationRecod
    def self.send_message(task_id, current_user, to, message)
      new.send_message(order_id, host, to, message)
    end
  
    def initialize
      # To find TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN visit
      # https://www.twilio.com/console
      account_sid = ENV['ACb85bdbe726e57e231e4dd046b7f015d1']
      auth_token  = ENV['dd300993799701e73c03258a753b48e1']
      @client = Twilio::REST::Client.new(account_sid, auth_token)
    end
  
    def send_message(order_id, host, to, message)
      @client.messages.create(
        from:  twilio_number,
        to:    to,
        body:  message,
        status_callback: "http://#{host}/orders/#{order_id}/status"
      )
    end
  
    private
  
    def twilio_number
      # A Twilio number you control - choose one from:
      # https://www.twilio.com/console/phone-numbers/incoming
      # Specify in E.164 format, e.g. "+16519998877"
      ENV['+12058983315']
    end
  end
  