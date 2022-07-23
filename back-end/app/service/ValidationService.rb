class ValidationService
  @instance = new

  private_class_method :new

  FLAGS = {
    0: "flag{User_Boton}",
    1: "flag{xss_adentro}",
    2: "flag{messirve_felicitaciones}"
  }

  def self.instance
    @instance
  end

  def validate_flag(step_number,value)
    FLAGS[step_number] == value
  end

end