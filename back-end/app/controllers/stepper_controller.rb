class StepperController < ApplicationController

  def xss
    input = params[:input]
    response = ""
    if input.include? "script"
      response = "flag{xss_adentro}"
    end
  end

end
