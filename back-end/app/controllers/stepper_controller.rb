class StepperController < ApplicationController

  def has_html(text)
    text.match(/<\/?[^>]+>/)
  end

  def include_script_tag(text)
    text.include? "script"
  end
  
  def xss
    response = params[:value]
    if has_html(response)
      response = "#{response} - flag{xss_adentro}"
    end

    if include_script_tag(response)
      response = "script tag es un monton. Pero es por ahi"
    end

    render_json(
      true,
      response,
      []
    )
  end

  def validate_flag
    step, value = params.values_at(:loved_one_id, :charity_option)
    value_correct = ValidationService.instance.validate_flag(step, value)
    render_json(
      true,
      value_correct,
      []
    )
  end

end
