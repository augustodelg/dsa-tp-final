class ValidationService
  @instance = new

  private_class_method :new

  def self.instance
    @instance
  end
  
  FLAGS = {
    0 => "flag{User_Boton}",
    1 => "flag{xss_adentro}",
    2 => "flag{messirve_felicitaciones}"
  }

  def get_flag(flag)
    FLAGS[flag]
  end

  def validate_flag(step_number,value)
    FLAGS[step_number.to_i] == value
  end

end