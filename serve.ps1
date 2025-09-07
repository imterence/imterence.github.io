# Simple HTTP Server for Portfolio Preview
# Run this script to serve your portfolio locally

$port = 8000
$path = Get-Location

Write-Host "🚀 Starting Portfolio Preview Server..." -ForegroundColor Green
Write-Host "📍 Serving from: $path" -ForegroundColor Yellow
Write-Host "🌐 Open your browser and go to: http://localhost:$port" -ForegroundColor Cyan
Write-Host "⏹️  Press Ctrl+C to stop the server" -ForegroundColor Red
Write-Host ""

try {
    # Create a simple HTTP listener
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
    
    Write-Host "✅ Server started successfully on port $port" -ForegroundColor Green
    Write-Host ""
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath
        $filePath = Join-Path $path $localPath.TrimStart('/')
        
        if ($localPath -eq "/" -or $localPath -eq "") {
            $filePath = Join-Path $path "index.html"
        }
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = Get-Content $filePath -Raw -Encoding UTF8
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
            
            # Set appropriate content type
            $extension = [System.IO.Path]::GetExtension($filePath)
            switch ($extension) {
                ".html" { $response.ContentType = "text/html" }
                ".css"  { $response.ContentType = "text/css" }
                ".js"   { $response.ContentType = "application/javascript" }
                ".png"  { $response.ContentType = "image/png" }
                ".jpg"  { $response.ContentType = "image/jpeg" }
                ".jpeg" { $response.ContentType = "image/jpeg" }
                ".gif"  { $response.ContentType = "image/gif" }
                ".svg"  { $response.ContentType = "image/svg+xml" }
                default { $response.ContentType = "text/plain" }
            }
            
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.StatusCode = 200
        } else {
            $response.StatusCode = 404
            $notFoundContent = "<h1>404 - File Not Found</h1><p>The requested file was not found on this server.</p>"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($notFoundContent)
            $response.ContentType = "text/html"
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        
        $response.Close()
    }
} catch {
    Write-Host "❌ Error starting server: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "💡 Make sure port $port is not already in use" -ForegroundColor Yellow
} finally {
    if ($listener) {
        $listener.Stop()
        Write-Host "🛑 Server stopped" -ForegroundColor Red
    }
}
