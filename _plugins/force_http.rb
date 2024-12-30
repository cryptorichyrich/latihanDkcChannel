Jekyll::Filters.module_eval do
    def force_https(input)
      req = Jekyll::Request.new
      unless req.host == "localhost" || req.host == "(link unavailable)"
        input.gsub('http', 'https')
      else
        input
      end
    end
  end
  