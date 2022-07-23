class ValidationService
  @instance = new

  private_class_method :new
  
  def self.instance
    @instance
  end 

  FLAGS = {
    0 => "flag{User_Boton}",
    1 => "flag{ojito_RBAC}",
    2 => "flag{xss_adentro}",
    3 => "flag{messirve_felicitaciones}"
  }

  def get_flag(step)
    FLAGS[step]
  end
  
  def validate_flag(step_number,value)
    FLAGS[step_number] == value
  end

end