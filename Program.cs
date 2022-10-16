using System.Net.Http;
using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
var app = builder.Build();

string GetApiKey()
{
    using (StreamReader r = new StreamReader("credentials.json"))
    {
        string json = r.ReadToEnd();
        dynamic items = JsonConvert.DeserializeObject(json);
        string apiKey = items["API_KEY"];
        return apiKey;        
    }
}

string apiKey = GetApiKey();

app.MapGet("/api/search/{name}", async (string name) =>
{
    HttpClient client = new HttpClient();
    var response = client.GetStringAsync($"https://www.googleapis.com/youtube/v3/search?key={apiKey}&part=snippet&q={name}");
    var data = await response;
    return Results.Ok(data);
});

app.Run();