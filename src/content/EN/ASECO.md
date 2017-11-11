# ASECO

## About Trackmania

Trackmania is one of the games that I have been playing a lot in my youth. The game provides a sandbox for creating racing tracks, which you can then drive on with players over the internet. I remember playing the first demo version that I discovered on a CD that was attached to a computer magazine. This must have been during highschool since I already had some knowledge in software development by then. I liked modifying games because this gave me a big audience and small changes could give you a whole new experience when playing. During that time I also wrote modifications for FarCry and GTA that have been used by a lot of players.

## First Script

So there came the moment when the developers added a XML-RPC interface to their dedicated server software. This enabled third party developers (players) to hook up to game events and also control the game in a very high level way. I was quite into PHP, because I did a lot of website development in my spare time. I began writing little PHP scripts to play with the API and eventually got the idea to record best times for each track that there was. Since players could make their own tracks there were a lot, but some were more popular then others and soon it became quite an urge to own the best finishing times for the most well known tracks.

## FAST

In the beginning I hosted a dedicated server and my script on my local computer. A lot of people would try to join and my computer and network were always under pressure. I figured that other people would have better hardware or even own rented servers, so I named my tool FAST and distributed it through forums, MSN and ICQ. Soon a lot of people would start to contribute to my software. This was bascially my first expercience with open source. People would either contribute by sharing issues or feature requests, but there were also developers interested in helping me out with the development. First I joined forces with a French developer known as "Slig". We continued working together for a while, until I decided to do a rewrite of the software. First of all because the dedicated server API had breaking changes, but also because our code base had grown a lot. He decided to stay with the project and released a second version (... and a third and fourth).

<figure>
![alt text](/img/aseco/servercontroller-timeline.jpg)
<figcaption>The ManiaPlanet documentation features a nice timeline on how the different tools evolved. It shows also how big and creative the Trackmania community actually is. Taken from [the maniaplanet documentation](http://doc.maniaplanet.com/dedicated-server/tools/)</figcaption>
</figure>

## ASECO

When I finished the rewrite in 2006, I renamed the project to ASECO (so there was no confusion with previous project). After a few months again I found someone that would contribute and I teamed up with "AssemblerManiac" (AM). To ease up development process we separated the core tool from some more advanced functionality and therefor created a plugin system. While I was mostly working on the core only, AM was working on "RASP" the plugin that added a lot of extra.

## ManiaLive

During my studies I wanted to spend a semester abroad and thus I applied for an internship at some game companies. Soon I had a call with Florent Castelnerac and he offered me to work at Nadeo in Paris to help them with an internal tool called "ManiaLive". Again we set up a new tool, this time with better focus on architecture and extendability. Furthermore we added PHP multithreading, a plugin repository with version management, a nice in-game UI and even some kind of window manager.

<figure style="max-width:600px">
![alt text](/img/aseco/manialive.png)
<figcaption>This is what ManiaLive looks like from a player perspective. Two screens have been merged together to demonstrate the nice UI and window manager capabilities.</figcaption>
</figure>