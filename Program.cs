using System.Net.Http;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
var app = builder.Build();

app.MapGet("/api/search/{name}", (string name) =>
{
    HttpClient client = new HttpClient();
    var response = client.GetStringAsync($"https://www.googleapis.com/youtube/v3/search?part=snippet&q={name}");
    return Results.Ok(response);
});

app.Run();