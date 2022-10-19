# Introduction
- Music Downloader is a web app that consumes youtube api and utilizes <a href="https://ffmpeg.org">FFmpeg</a> and <a href="https://github.com/yt-dlp/yt-dlp">yt-dlp</a> to download the videos and send them to the client
- You firstly need to <a href="https://developers.google.com/youtube/v3/getting-started">get the youtube api key</a>, then create a ```credentials.json``` file in the root directory and save it this way:
```Json
{
    "API_KEY": "{YOUR YOUTUBE API KEY HERE}"
}
```

- After that, you'll need to download <a href="https://ffmpeg.org/download.html">FFmpeg</a> and <a href="https://github.com/yt-dlp/yt-dlp#installation">yt-dlp</a> and put both of them in the root directory

# How to run
- Start two terminals in the root directory
- In the first one, type ```dotnet run``` to initialize the api
- In the second one, go to the client directory with ```cd client``` and install all dependencies with ```npm start```, then type ```npm start``` to initialize client
