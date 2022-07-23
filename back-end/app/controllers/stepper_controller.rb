class StepperController < ApplicationController
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

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

  def cookie_flag
    if !cookies["user_role"]
      render_json(
        true,
        'No hay cookies, algo rompiste',
        []
      )
    end
      role = Role.find(cookies["user_role"])
      message=''
      if role.name == "admin"
        message =  ValidationService.instance.get_flag(1)
      else
        message = "NOPE, vos no tenes permiso para ver esto"
      end
    render_json(
      true,
      message,
      []
    )
    
  end

  def validate_flag
    step, value = params.values_at(:step, :value)
    validation_service = ValidationService.instance
    value_correct = validation_service.validate_flag(step, value)
    render_json(
      value_correct,
      value_correct,
      []
    )
  end

end
