class ApplicationController < ActionController::API
    def render_json(result, payload, error_message)
        render json: {
          success: ActiveModel::Type::Boolean.new.cast(result),
          payload: result ? payload : nil,
          errors: result ? nil : error_message
        }
    end
end
