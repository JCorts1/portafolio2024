Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://jaycortes.netlify.app', 'http://localhost:3000', 'https://localhost:3001'

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
