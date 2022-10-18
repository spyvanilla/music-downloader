using System.Net.Http;
using Newtonsoft.Json;
using YoutubeDLSharp;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
    {
        builder.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
    }));
var app = builder.Build();

app.UseCors("corsapp");
app.UseStaticFiles();
app.UsePathBase(new PathString("/api"));
app.UseRouting();

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

app.MapGet("/search/{name}", async (string name) =>
{
    HttpClient client = new HttpClient();
    var response = client.GetStringAsync($"https://www.googleapis.com/youtube/v3/search?key={apiKey}&part=snippet&q={name}");
    var data = await response;
    return data;
});

app.MapGet("/download-video/{id}", async (string id) =>
{
    var ytdl = new YoutubeDL();
    ytdl.OutputFolder = "wwwroot/";
    ytdl.FFmpegPath = "ffmpeg.exe";
    ytdl.YoutubeDLPath = "yt-dlp.exe";

    var res = await ytdl.RunAudioDownload($"https://www.youtube.com/watch?v={id}", YoutubeDLSharp.Options.AudioConversionFormat.Mp3);
    Console.WriteLine(res.Success ? "Downloaded successfully" : "An error occurred while trying to download");

    if (!res.Success)
    {
        return Results.NotFound();
    }

    string path = res.Data;
    Console.WriteLine(res.Data);

    return Results.Ok();
});

app.Run();