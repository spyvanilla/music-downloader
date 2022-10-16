var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
var app = builder.Build();

app.MapGet("/alo", () =>
{
    return Results.Ok();
});

app.Run();