OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '630989281533-diroo6sa8flrgtm1ie2hminpqoi20vgp.apps.googleusercontent.com', 'lCtuDBXXl_uxafOil3nBAyld',
  {
    client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}},
    :scope => 'userinfo.email, userinfo.profile, plus.login, plus.me', :skip_jwt => true  
  }
end
