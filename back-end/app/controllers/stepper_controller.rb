class StepperController < ApplicationController

  def has_html(text)
    html_regex = "<\s*([^ >]+)[^>]*>.*?<\s*/\s*\1\s*>"
    text.match(/<\/?[^>]+>/)
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
