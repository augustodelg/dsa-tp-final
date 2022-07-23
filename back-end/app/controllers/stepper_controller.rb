class StepperController < ApplicationController

  def has_html(text)
    true
  end
  
  def xss
    response = params[:value]
    if has_html(response)
      response = "#{response} - flag{xss_adentro}"
    end

    render_json(
      true,
      response,
      []
    )

  end

end
